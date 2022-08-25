$(document).ready(function () {
  $(".events__carousel").slick({
    arrows: false,
    infinite: true,
    speed: 300,
    variableWidth: true,
  });

  $(".goods").each(setupCarousel);

  $(".review__carousel").slick({
    arrows: false,
    infinite: true,
    speed: 300,
    variableWidth: true,
  });

  $(function () {
    $(".goods__card").click(function (event) {
      event.preventDefault();

      renderProductPageIntoModal();
      $(".modal").addClass("modal--active");
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

    $("#shop__form").on("submit", handleSubmitShopForm);
    $(".modal").find(".goods").each(setupCarousel);
  }

  function renderSuccessPageIntoModal() {
    const template = $("#order-success-template")
      .prop("content")
      .cloneNode(true);

    $(".modal__content").empty();

    document.querySelector(".modal__content").appendChild(template);

    $(".modal__content").find(".button-link").click(closeModal);
  }

  function handleSubmitShopForm(event) {
    event.preventDefault();

    const phone = $("#shop__phone").val();
    const isValid = validatePhoneNumber(phone);

    displayError(isValid);

    if (isValid) {
      renderSuccessPageIntoModal();
    }
  }

  function closeModal() {
    $(".modal").removeClass("modal--active").find(".modal__content").empty();
  }

  function setupCarousel(index, element) {
    const options = {
      arrows: false,
      infinite: true,
      speed: 300,
      variableWidth: true,
    };

    if ($(element).children().length === 1) {
      options.centerMode = true;
    }

    $(element).slick(options);
  }

  function validatePhoneNumber(input_str) {
    var re = /^\+7\d{10}$/;

    return re.test(input_str);
  }

  function displayError(valid) {
    if (valid) {
      $("#phone_error").addClass("hidden");
    } else {
      $("#phone_error").removeClass("hidden");
    }
  }
});
