const DESKTOP_BREAKPOINT = 1440;

$(document).ready(function () {
  const SETTINGS = {
    isDesktop: $(window).width() >= DESKTOP_BREAKPOINT,
  };

  $(".events__carousel").slick({
    arrows: false,
    infinite: true,
    speed: 300,
    variableWidth: true,
  });

  $(".goods-carousel").each(setupGoodsCarousel);

  $(".reviews__carousel").slick({
    arrows: false,
    infinite: true,
    speed: 300,
    variableWidth: true,
  });

  $(window).resize(function () {
    SETTINGS.isDesktop = $(this).width() >= DESKTOP_BREAKPOINT;
  });

  $(function () {
    $(".good").click(function (event) {
      event.preventDefault();

      renderProductPageIntoModal();
      $(".modal").addClass("modal--active");
      $("body").addClass("no-scroll");
    });

    $(".modal__close").click(closeModal);

    $(".modal").mouseup(function (e) {
      const modalWindow = $(".modal__window");
      const isOutsideClick =
        !modalWindow.is(e.target) && modalWindow.has(e.target).length === 0;

      if (isOutsideClick) {
        closeModal();
      }
    });
  });

  function renderProductPageIntoModal() {
    const template = $("#product-form-template")
      .prop("content")
      .cloneNode(true);

    document.querySelector(".modal__content").appendChild(template);

    $("#product-form").on("submit", handleSubmitShopForm);
    $(".modal").find(".goods-carousel").each(setupGoodsCarouselToModal);
    $(".product-form__phone-input").on("input", handleInputChange);
  }

  function renderSuccessPageIntoModal() {
    const template = $("#order-success-template")
      .prop("content")
      .cloneNode(true);

    $(".modal__content").empty();

    document.querySelector(".modal__content").appendChild(template);

    $(".modal__content").find(".button").click(closeModal);
  }

  function handleInputChange(event) {
    const value = event.target.value;
    const isValid = validatePhoneNumber(value);

    activateForm(isValid);
  }

  function handleSubmitShopForm(event) {
    event.preventDefault();

    const phone = $("#product-form-phone").val();
    const isValid = validatePhoneNumber(phone);

    if (isValid) {
      renderSuccessPageIntoModal();
    }
  }

  function closeModal() {
    $(".modal").removeClass("modal--active").find(".modal__content").empty();
    $("body").removeClass("no-scroll");
  }

  function setupCarousel(element, additionalOptions) {
    const options = Object.assign(
      {
        arrows: false,
        infinite: true,
        speed: 300,
        variableWidth: true,
      },
      additionalOptions
    );

    if ($(element).children().length === 1) {
      options.centerMode = true;
    }

    $(element).slick(options);
  }

  function setupGoodsCarousel(index, element) {
    setupCarousel(element, {});
  }

  function setupGoodsCarouselToModal(index, element) {
    const options = {};

    if (SETTINGS.isDesktop) {
      options.slidesToShow = 1;
      options.variableWidth = false;
    }

    setupCarousel(element, options);
  }

  function validatePhoneNumber(input_str) {
    var re = /^\+7\d{10}$/;

    return re.test(input_str);
  }

  function activateForm(valid) {
    if (valid) {
      $("#product-form-phone-error").addClass("hidden");
      $(".product-form__phone-input").removeClass(
        "product-form__phone-input--error"
      );
      $(".button").removeClass("button--disabled");
    } else {
      $("#product-form-phone-error").removeClass("hidden");
      $(".product-form__phone-input").addClass(
        "product-form__phone-input--error"
      );
      $(".button").addClass("button--disabled");
    }
  }
});
