(function () {
  var copyButton = document.querySelector('[data-copy-feed]');

  if (!copyButton) {
    return;
  }

  function showToast(message) {
    var toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    requestAnimationFrame(function () {
      toast.classList.add('is-visible');
    });

    window.setTimeout(function () {
      toast.classList.remove('is-visible');
      window.setTimeout(function () {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 220);
    }, 1800);
  }

  copyButton.addEventListener('click', function () {
    var text = copyButton.getAttribute('data-copy-text') || '';

    if (!navigator.clipboard || !navigator.clipboard.writeText) {
      showToast('当前环境不支持自动复制，请手动复制 RSS 地址');
      return;
    }

    navigator.clipboard.writeText(text).then(function () {
      showToast('RSS 地址已复制');
    }).catch(function () {
      showToast('复制失败，请手动复制 RSS 地址');
    });
  });
})();