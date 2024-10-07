class AnimeService {
	_baseUrl = 'https://cdn.amediatv.uz/api/'
	_apiImg = 'https://cdn.amediatv.uz'
	_paganation = 'season/filter?page='
	_limit = 12
	_category = 'category'

	getResource = async url => {
		const res = await fetch(url)
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, received ${res.status}`)
		}
		return await res.json()
	}

	getPopularSlider = async () => {
		return await this.getResource(`${this._baseUrl}slider/client`)
	}

	postAllAnime = async (page = 1) => {
		const option = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({}),
		}
		return await fetch(
			`${this._baseUrl}${this._paganation}${page}&limit=${this._limit}`,
			option
		)
	}

	getRandom = async () => {
		const res = await this.getPopularSlider()
		const movie = res.data[Math.floor(Math.random() * res.data.length)]
		return this._tranformMovie(movie)
	}

	getCategory = async () => {
		return await this.getResource(`${this._baseUrl}${this._category}`)
	}

	_tranformMovie = movie => {
		return {
			id: movie.id,
			name: movie.serial.name.uz,
			image: `${this._apiImg}${movie.serial.image}`,
			description: movie.serial.description.uz,
		}
	}
}

export default AnimeService
