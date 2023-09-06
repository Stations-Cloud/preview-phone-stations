function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var Screen1 = function Screen1(_ref) {
  var title = _ref.title,
    description = _ref.description;
  return React.createElement("div", {
    className: "screen1"
  }, React.createElement("div", {
    className: 'main-container'
  }, React.createElement("h1", {
    className: 'title-notification'
  }, title), React.createElement("p", {
    className: 'descripition-notification'
  }, description)));
};

var leftArrow = "left-arrow~jAfIqaoT.png";

var clubeLogo = "clubeLogo~nSnIIxIG.png";

var Screen2 = function Screen2(props) {
  return React.createElement("div", {
    className: "screen2"
  }, React.createElement("div", {
    className: 'top-bar'
  }, React.createElement("img", {
    src: leftArrow,
    alt: 'seta',
    className: 'arrow-left'
  }), React.createElement("div", {
    className: 'bar-text'
  }, props.barText ? props.barText : "Notificações")), React.createElement("div", {
    className: 'content-container'
  }, React.createElement("img", {
    src: props.logo ? props.logo : clubeLogo,
    className: 'logo-img',
    alt: "Logo"
  }), React.createElement("h1", {
    className: 'page-title'
  }, props.pageTitle), props.code ? React.createElement("h3", {
    className: 'code-title'
  }, "C\xD3DIGO") : "", props.code ? React.createElement("div", {
    className: 'code-container'
  }, React.createElement("p", {
    className: 'code-text'
  }, props.code)) : "", React.createElement("p", {
    className: 'notification-description'
  }, props.notificationDescription), props.buttonLink ? React.createElement("a", {
    href: props.buttonLink,
    target: "_blank",
    rel: "noopener noreferrer"
  }, React.createElement("button", {
    className: 'button-link'
  }, props.buttonText)) : "", props.discountRules ? React.createElement("p", {
    className: 'rules-text'
  }, props.discountRules) : ""));
};

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
    className: "App"
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
