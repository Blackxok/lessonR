import React, { useEffect, useRef } from 'react'

export default function HomeBg() {
	const canvasRef = useRef(null) // Reference to the canvas element
	const mousePosRef = useRef({ x: 0, y: 0 }) // Track mouse position

	useEffect(() => {
		const canvas = canvasRef.current // Get canvas element
		const context = canvas.getContext('2d')
		let rafID, timeoutID

		const Net = class {
			constructor() {
				this.nodes = []
				this.length = undefined
			}

			populate(length) {
				this.length = length
				for (let i = 0; i < length; i++) {
					const xPos = Math.floor(getRandom(0, canvas.width))
					const yPos = Math.floor(getRandom(0, canvas.height))
					this.nodes.push(new Node(xPos, yPos))
				}
			}

			update() {
				for (let i = 0; i < this.length; i++) {
					this.nodes[i].update()
				}
			}

			draw() {
				context.fillStyle = '#1E201E'
				context.fillRect(0, 0, canvas.width, canvas.height)
				for (let i = 0; i < this.length - 1; i++) {
					this.nodes[i].draw()
				}
			}

			connect(distanceMax) {
				for (let i = 0; i < this.length - 1; i++) {
					this.nodes[i].connections = []
					for (let j = 0; j < this.length - 1; j++) {
						const a = this.nodes[j].x - this.nodes[i].x
						const b = this.nodes[j].y - this.nodes[i].y
						const c = Math.sqrt(a * a + b * b)

						const xToMouse = this.nodes[j].x - mousePosRef.current.x
						const yToMouse = this.nodes[j].y - mousePosRef.current.y
						this.nodes[i].dToMouse = Math.floor(
							Math.sqrt(xToMouse * xToMouse + yToMouse * yToMouse)
						)

						let d = (distanceMax / this.nodes[i].dToMouse) * 200
						if (d > distanceMax) {
							d = distanceMax
						}

						if (j > i && c < d) {
							this.nodes[i].connections.push(j)
						}
					}

					for (let k = 0; k < this.nodes[i].connections.length; k++) {
						context.beginPath()
						context.moveTo(this.nodes[i].x, this.nodes[i].y)
						context.lineTo(
							this.nodes[this.nodes[i].connections[k]].x,
							this.nodes[this.nodes[i].connections[k]].y
						)
						context.strokeStyle =
							'rgba(255,255,255,' + this.nodes[i].depth / 7 + ')'
						context.stroke()
					}
				}
			}
		}

		const Node = class {
			constructor(_x, _y) {
				this.x = _x
				this.y = _y
				this.radius = 2
				this.depth = Math.floor(getRandom(1, 10)) / 10
			}

			update() {
				const velocity = 1 - this.depth
				this.x += velocity
				if (this.x > canvas.width || this.x < 0) {
					this.x = 0
				}
			}

			draw() {
				const alpha = 1 - this.depth
				context.beginPath()
				context.arc(this.x, this.y, this.radius, 0, Math.PI, false)
				context.fillStyle = `rgba(200,200,200,${alpha + 10})`
				context.fill()
			}
		}

		const getRandom = (min, max) => Math.random() * (max - min) + min

		const printMouse = e => {
			const rect = canvas.getBoundingClientRect()
			mousePosRef.current = {
				x: (e.clientX - rect.left) * (canvas.width / rect.width),
				y: (e.clientY - rect.top) * (canvas.height / rect.height),
			}
		}

		const init = () => {
			clearTimeout(timeoutID)
			window.cancelAnimationFrame(rafID)

			canvas.width = window.innerWidth
			canvas.height = window.innerHeight

			const nodesLength = Math.floor((canvas.width * canvas.height) / 3000)
			const net = new Net()
			net.populate(nodesLength)

			const render = () => {
				net.update()
				net.draw()
				net.connect(110)
				rafID = window.requestAnimationFrame(render)
			}
			rafID = window.requestAnimationFrame(render)
		}

		window.addEventListener('mousemove', printMouse)
		window.addEventListener('resize', init)

		init()

		return () => {
			window.removeEventListener('mousemove', printMouse)
			window.removeEventListener('resize', init)
			cancelAnimationFrame(rafID) // Cleanup on unmount
		}
	}, [])
	return (
		<>
			<div className='container home_bg'>
				<canvas ref={canvasRef} id='inner_heading-canvas'></canvas>
			</div>
		</>
	)
}
