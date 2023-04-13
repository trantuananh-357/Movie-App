const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'd93911a18672e025c67c76585f46208d',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;