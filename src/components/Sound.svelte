<script>
	export let info
	export let index
	let volume = 10
	let playing = false
	let image = {
		src: info.image_local !== null ? info.image_local : info.image_test,
		invert: info.image_lightness == "dark" ? false : true
	}
	const changeVolume = () => {
		let sound = document.getElementById(`sound-${index}`).getElementsByTagName("audio")[0]
		sound.volume = parseFloat(volume / 10)
	}
	const play = (e) => {
		let sound = document.getElementById(`sound-${index}`).getElementsByTagName("audio")[0]
		let vol = document.getElementById(`sound-${index}`).getElementsByClassName("sound-volume")[0]
		if (!e.target.classList.contains("sound-volume") && !e.target.classList.contains("sound-volume-wrapper")) {
			if (!playing) {
				if (!sound.src.indexOf(".mp3") > -1 && !sound.src.indexOf(".mp4") > -1) {
					sound.src = info.source
				}
				vol.disabled = false
				sound.play()
			} else if (playing) {
				vol.disabled = true
				sound.pause()
			}
			playing = !playing
		}
	}
</script>

<style lang="sass">
.sound
	flex: 1
	margin: 0.5rem
	cursor: pointer
	min-width: 100%
	background: #eee
	display: flex
	flex-wrap: wrap
	align-items: center
	justify-content: center
	border-radius: 0.5rem
	transition: all 0.2s ease-in-out
	box-shadow: 0 0 0.5rem 0.25rem rgba(0, 0, 0, 0.1) inset
	@media (min-width: 28rem)
		min-width: 40%
		max-width: 50%
	@media (min-width: 40rem)
		min-width: 30%
	&:hover
		background: rgba(#eee, 1)
		box-shadow: 0 0 0.5rem 0.25rem rgba(0, 0, 0, 0.1) inset
		.sound-image-wrapper
			.sound-image
				transform: scale(1.25)
	.sound-image-wrapper
		width: 100%
		height: 5rem
		display: flex
		flex-wrap: wrap
		align-items: center
		justify-content: center
		transition: all 0.1s ease-in-out
		@media (min-width: 28rem)
			height: 8rem
		.sound-image
			width: 3rem
			height: 3rem
			padding: 1rem
			box-sizing: content-box
			transition: all 0.1s ease-in-out
			@media (min-width: 28rem)
				width: 5rem
				height: 5rem
			&.inverted
				filter: invert(1)
	.sound-title
		font-size: 1.25rem
		line-height: 1.25rem
		text-align: center
		display: flex
		flex-wrap: wrap
		align-items: center
		justify-content: center
		padding: 1rem 1rem 0.25rem 1rem
	.sound-volume-wrapper
		width: 100%
		padding: 1rem 0.5rem
		.sound-volume
			width: 100%
</style>

<div class="sound" id={`sound-${index}`} on:click={play}>
	<div class="sound-image-wrapper">
		<img class="sound-image" class:inverted={image.invert} src={image.src} alt="">
	</div>
	<p class="sound-title">{info.title}</p>
	<audio class="sound-audio hide" src="" controls></audio>
	<div class="sound-volume-wrapper">
		<input class="sound-volume" on:change={changeVolume} disabled="true" type="range" name="volume" min="0" max="10" step="1" bind:value={volume} />
	</div>
</div>
