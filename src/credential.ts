import SyncFTP from './main';
import { App, PluginSettingTab, Setting } from 'obsidian';

export default class CredentialTab extends PluginSettingTab {
	plugin: SyncFTP;

	constructor(app: App, plugin: SyncFTP) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		containerEl.createEl('h2', {text: 'SFTP Settings'});

		new Setting(containerEl)
			.setName('URL')
			.setDesc('FTP URL')
			.addText(text => text
				.setValue(this.plugin.settings.url)
				.onChange(async (value) => {
					this.plugin.settings.url = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName('Port')
			.setDesc('FTP Port')
			.addText(text => text
				.setValue(this.plugin.settings.port)
				.onChange(async (value) => {
					this.plugin.settings.port = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName('Username')
			.setDesc('FTP Username')
			.addText(text => text
				.setValue(this.plugin.settings.username)
				.onChange(async (value) => {
					this.plugin.settings.username = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName('Password')
			.setDesc('FTP Password')
			.addText(text => text
				.setValue(this.plugin.settings.password)
				.onChange(async (value) => {
					this.plugin.settings.password = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName('Vaults Path')
			.setDesc('FTP Vaults Directory Path')
			.addText(text => text
				.setValue(this.plugin.settings.vault_path)
				.onChange(async (value) => {
					this.plugin.settings.vault_path = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName('Sync Notifications')
			.setDesc('Would you like to be notified of all SyncFTP actions? Necessary Notices will still populate.')
			.addToggle(toggle => toggle
				.setValue(this.plugin.settings.notify)
				.onChange(async (value) => {
					this.plugin.settings.notify = value;
					await this.plugin.saveSettings();
				}));
	}
}
