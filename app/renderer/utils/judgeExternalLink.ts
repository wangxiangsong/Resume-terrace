/**
 * @desription 判断是否属于外部链接
 * @param {string} url 链接
 * @returns {boolean}
 */
function isExternalLink(url: string) {
  let regRule = /(http|https):\/\/([\w.]+\/?)\S*/;
  return regRule.test(url.toLowerCase());
}

export { isExternalLink };
