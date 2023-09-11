function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var styles = {"screen1":"_3LDBN","mainContainer":"_K-CBb","titleNotification":"_3nf-K","descripitionNotification":"_3yTTG"};

var Screen1 = function Screen1(_ref) {
  var title = _ref.title,
    description = _ref.description;
  return React.createElement("div", {
    className: styles.screen1
  }, React.createElement("div", {
    className: styles.mainContainer
  }, React.createElement("h1", {
    className: styles.titleNotification
  }, title), React.createElement("p", {
    className: styles.descripitionNotification
  }, description)));
};

var styles$1 = {"screen2":"_1P8t7","topBar":"_2bTNP","arrowLeft":"_3kZNL","barText":"_XOTox","contentContainer":"_2wlgM","logoImg":"_2sxh9","pageTitle":"_2bf1I","codeTitle":"_20vSF","codeContainer":"_1P7li","codeText":"_1Ii_w","notificationDescription":"_3fN-o","buttonLink":"_3pRGJ","rulesText":"_3TG3h"};

var leftArrow = "left-arrow~jAfIqaoT.png";

var clubeLogo = "clubeLogo~nSnIIxIG.png";

var Screen2 = function Screen2(props) {
  return React.createElement("div", {
    className: styles$1.screen2
  }, React.createElement("div", {
    className: styles$1.topBar
  }, React.createElement("img", {
    src: leftArrow,
    alt: 'seta',
    className: styles$1.arrowLeft
  }), React.createElement("div", {
    className: styles$1.barText
  }, props.barText ? props.barText : 'Notificações')), React.createElement("div", {
    className: styles$1.contentContainer
  }, React.createElement("img", {
    src: props.logo ? props.logo : clubeLogo,
    className: styles$1.logoImg,
    alt: 'Logo'
  }), React.createElement("h1", {
    className: styles$1.pageTitle
  }, props.pageTitle), props.code ? React.createElement("h3", {
    className: styles$1.codeTitle
  }, "C\xD3DIGO") : '', props.code ? React.createElement("div", {
    className: styles$1.codeContainer
  }, React.createElement("p", {
    className: styles$1.codeText
  }, props.code)) : '', React.createElement("p", {
    className: styles$1.notificationDescription
  }, props.notificationDescription), props.buttonLink ? React.createElement("a", {
    href: props.buttonLink,
    target: '_blank',
    rel: 'noopener noreferrer'
  }, React.createElement("button", {
    className: styles$1.buttonLink
  }, props.buttonText)) : '', props.discountRules ? React.createElement("p", {
    className: styles$1.rulesText
  }, props.discountRules) : ''));
};

var styles$2 = {"App":"_1o-Fp","App-logo":"_3JCPt","App-logo-spin":"_RvI1J","App-header":"_3iH8L","App-link":"_13fTZ"};

function App(_ref) {
  var title = _ref.title,
    description = _ref.description,
    barText = _ref.barText,
    buttonLink = _ref.buttonLink,
    buttonText = _ref.buttonText,
    code = _ref.code,
    discountRules = _ref.discountRules,
    logo = _ref.logo,
    notificationDescription = _ref.notificationDescription,
    notificationTitle = _ref.notificationTitle,
    pageTitle = _ref.pageTitle;
  return React.createElement("div", {
    className: styles$2.App
  }, React.createElement(Screen1, {
    title: title,
    description: description
  }), React.createElement(Screen2, {
    barText: barText,
    logo: logo,
    pageTitle: pageTitle,
    notificationTitle: notificationTitle,
    notificationDescription: notificationDescription,
    code: code,
    discountRules: discountRules,
    buttonText: buttonText,
    buttonLink: buttonLink
  }));
}

module.exports = App;
//# sourceMappingURL=index.js.map
