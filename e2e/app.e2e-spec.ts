import { ZodiacNormaPage, } from './app.po';
import { browser, element, by } from 'protractor';

describe('zodiac-norma App', () => {
  let page: ZodiacNormaPage;

  beforeEach(() => {
    page = new ZodiacNormaPage();
  });

it('should display: Book a room online', done => {
    page.navigateToHome();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Find a hotel online'))
      .then(done, done.fail);
  });

  it('should find the buttonBox class', () => {
    let elem = element(by.css('.buttonBox'));
    expect(elem.isPresent()).toBeTruthy();
  });

  it('type of room initially should be Select a type of room', () => {
    let elem = element(by.css('#adults'));
    expect(elem.value).toBe('1');
  });

  it('first datepicker placeholder initially should be DD/MM/YYYY', () => {
    let elem = element(by.css('#firstDatePicker'));
    expect(elem.getAttribute('placeholder')).toBe('DD/MM/YYYY');
  });

  it('adultInput initially should be 1', () => {
    let elem = element(by.css('#adultInput'));
    expect(elem.getAttribute('value')).toBe('1');
  });

  it('childInput initially should be 0', () => {
    let elem = element(by.css('#childInput'));
    expect(elem.getAttribute('value')).toBe('0');
  });

  it('footertext color should be rgba(170, 170, 170, 1)', () => {
    let elem = element(by.css('.footerText'));
    expect(elem.getCssValue('color')).toBe('rgba(170, 170, 170, 1)');
  });

  it("slider arrow z-index should be 100", () => {
    let elem = element(by.css('.arrow.left'));
    expect(elem.getCssValue('z-index')).toEqual('100');
  });

  it("number of hotels class should be 3", () => {
    let elem = element.all(by.css('.hotels'));
    expect(elem.count()).toEqual(3);
  });


});
