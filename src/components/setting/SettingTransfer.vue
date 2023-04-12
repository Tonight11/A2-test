<script setup>
	import SettingItem from './SettingItem.vue';
	import InfoIcon from '@/components/Icon/InfoIcon.vue';
</script>

<template>
	<SettingItem title="Переход в карточку">
		<div class="settings__text">
			Выберите, каким образом будет открываться детальное представление
			выбранного вами транспорта.
		</div>
		<div class="settings-alert__form">
			<div class="checkbox">
				<label>
					<input
						type="radio"
						name="transfer"
						checked
						v-model="relocate"
						value="current"
					/>
					В карточку в текущем окне
				</label>
			</div>
			<div class="checkbox">
				<label>
					<input
						type="radio"
						name="transfer"
						v-model="relocate"
						value="other"
					/>
					В карточку в отдельном окне
				</label>
			</div>
			<div class="checkbox">
				<label>
					<input
						type="radio"
						name="transfer"
						v-model="relocate"
						value="source"
					/>
					На источник
				</label>
				<InfoIcon />
			</div>
		</div>
	</SettingItem>
</template>

<style lang="scss"></style>
