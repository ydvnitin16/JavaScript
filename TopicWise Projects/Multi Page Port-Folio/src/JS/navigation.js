export function loadPage(page) {
    import(`./${page}.js`)
    .then(module => document.getElementById('contant').innerHTML = module.default())
    .catch(err => document.getElementById('contant').innerHTML = `Sorry! Can't Load The Page`)
}