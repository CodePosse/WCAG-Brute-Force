// Creates labels from input placeholders and binds them to the input id.
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('input').forEach((el) => {
    const inputID = el.getAttribute('id');
    const placeholder = el.getAttribute('placeholder');

    const newLabel = document.createElement('label');
    el.before(newLabel);

    el.removeAttribute('placeholder');
    newLabel.setAttribute('for', inputID);
    newLabel.className = 'myclass';
    newLabel.append(placeholder);

    console.log(`Placeholders: ${placeholder} created for ID:${inputID}`);
  });
});
