module.exports = {

getPicsum: (query, i) =>
`https://picsum.photos/seed/${encodeURIComponent(query + i)}/800/600`,

getLorem: () =>
`https://loremflickr.com/800/600`,

getUnsplashLike: (query) =>
`https://source.unsplash.com/800x600/?${encodeURIComponent(query)}`

}
