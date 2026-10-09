"""Live regression: revealed reading text remains opaque after further scrolling.
Run with python3 tests/text_reveal_test.py against the running preview.
"""
import asyncio
from playwright.async_api import async_playwright

async def assert_solid(locator):
    opacities = await locator.evaluate_all('''elements => elements.map(element => {
      let opacity = 1;
      for (let node = element; node; node = node.parentElement) {
        opacity *= Number(getComputedStyle(node).opacity);
      }
      return opacity;
    })''')
    assert opacities, 'Expected reading text to be present'
    assert all(abs(value - 1) < 0.001 for value in opacities), opacities

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1280, "height": 1800})
        errors = []
        page.on('pageerror', lambda error: errors.append(str(error)))
        await page.goto('http://localhost:8080', wait_until='networkidle')
        headings = page.locator('main h2')
        count = await headings.count()
        for i in range(count):
            heading = headings.nth(i)
            await heading.scroll_into_view_if_needed()
            await page.wait_for_timeout(1200)
            await assert_solid(heading)
        await page.evaluate('window.scrollTo(0, 0)')
        await page.wait_for_timeout(1200)
        await assert_solid(headings)
        await assert_solid(page.locator('#transformation h2, #transformation p, #transformation li'))
        await page.locator('#transformation').scroll_into_view_if_needed()
        await page.wait_for_timeout(1000)
        await page.screenshot(path='/tmp/browser/text-reveal/after.png')
        await page.get_by_role('link', name='View Case Study').first.click()
        await page.wait_for_timeout(1200)
        for heading in await page.locator('main h2').all():
            await heading.scroll_into_view_if_needed()
            await page.wait_for_timeout(1200)
            await assert_solid(heading)
        await page.evaluate('window.scrollTo(0, 0)')
        await page.wait_for_timeout(1200)
        await assert_solid(page.locator('main h2'))
        assert not errors, errors
        print(f'PASS: {count} home headings, both comparison text/bullet groups, and case-study headings stay fully opaque after scrolling; no runtime errors.')
        await browser.close()

asyncio.run(main())
