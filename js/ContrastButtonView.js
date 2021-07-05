import Adapt from 'core/js/adapt';

class ContrastButtonView extends Backbone.View {

  tagName() {
    return 'button';
  }

  className() {
    return 'btn-icon nav__btn visua11y-btn';
  }

  events() {
    return {
      click: 'onClick'
    };
  }

  initialize() {
    this.render();
  }

  render() {
    const template = Handlebars.templates.visua11yButton;
    const data = {
      name: `Contrast ${!Adapt.visua11y.increaseContrast ? 'on' : 'off'}`
    };
    this.$el.html(template(data));
  }

  onClick(event) {
    if (event && event.preventDefault) event.preventDefault();
    Adapt.visua11y.increaseContrast = !Adapt.visua11y.increaseContrast;
    this.render();
  }

}

export default ContrastButtonView;
