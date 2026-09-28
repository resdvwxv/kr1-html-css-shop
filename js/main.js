// ===============================
// 1. Модальное окно (dialog)
// ===============================

const orderDialog = document.getElementById('order-dialog');
const orderButtons = document.querySelectorAll('.product-card__button, .product-detail__order-btn');
const closeDialogButton = document.getElementById('close-order-dialog');
const selectedProductInput = document.getElementById('selected-product');

if (orderButtons.length > 0 && orderDialog && selectedProductInput) {
  orderButtons.forEach((button) => {
    const productName = button.dataset.product;
    selectedProductInput.value = productName || '';
    button.addEventListener('click', () => {
      orderDialog.showModal();
    });
  });
}

if (closeDialogButton && orderDialog) {
  closeDialogButton.addEventListener('click', () => {
    orderDialog.close();
  });
}

// ===============================
// 2. Валидация формы в модальном окне
// ===============================

const orderForm = document.getElementById('order-form');
const successMessage = document.getElementById('success-message');

if (orderForm && successMessage) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formElements = Array.from(orderForm.elements);
    formElements.forEach((element) => {
      if (element.willValidate) {
        element.removeAttribute('aria-invalid');
      }
    });

    if (!orderForm.checkValidity()) {
      formElements.forEach((element) => {
        if (element.willValidate && !element.checkValidity()) {
          element.setAttribute('aria-invalid', 'true');
        }
      });
      orderForm.reportValidity();
      return;
    }

    successMessage.hidden = false;
    orderForm.reset();
    orderDialog.close();

    setTimeout(() => {
      successMessage.hidden = true;
    }, 5000);
  });
}

// ===============================
// 3. Форма на странице order.html
// ===============================

const orderFormPage = document.getElementById('order-form-page');
const successMessagePage = document.getElementById('success-message-page');

if (orderFormPage && successMessagePage) {
  orderFormPage.addEventListener('submit', (event) => {
    event.preventDefault();

    const formElements = Array.from(orderFormPage.elements);
    formElements.forEach((element) => {
      if (element.willValidate) {
        element.removeAttribute('aria-invalid');
      }
    });

    if (!orderFormPage.checkValidity()) {
      formElements.forEach((element) => {
        if (element.willValidate && !element.checkValidity()) {
          element.setAttribute('aria-invalid', 'true');
        }
      });
      orderFormPage.reportValidity();
      return;
    }

    successMessagePage.hidden = false;
    orderFormPage.reset();

    setTimeout(() => {
      successMessagePage.hidden = true;
    }, 5000);
  });
}

// ===============================
// 4. Кнопка «Наверх» (scroll-top)
// ===============================

const scrollTopBtn = document.querySelector('.scroll-top');

if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===============================
// 5. Форма обратной связи (contacts.html)
// ===============================

const feedbackForm = document.getElementById('feedback-form');
const successMessageFeedback = document.getElementById('success-message-feedback');

if (feedbackForm && successMessageFeedback) {
  feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formElements = Array.from(feedbackForm.elements);
    formElements.forEach((element) => {
      if (element.willValidate) {
        element.removeAttribute('aria-invalid');
      }
    });

    if (!feedbackForm.checkValidity()) {
      formElements.forEach((element) => {
        if (element.willValidate && !element.checkValidity()) {
          element.setAttribute('aria-invalid', 'true');
        }
      });
      feedbackForm.reportValidity();
      return;
    }

    successMessageFeedback.hidden = false;
    feedbackForm.reset();

    setTimeout(() => {
      successMessageFeedback.hidden = true;
    }, 5000);
  });
}
