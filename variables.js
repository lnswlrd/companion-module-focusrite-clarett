/**
 * Focusrite Clarett Variables
 *
 * Exposed variables for use in button text and triggers
 */

export function updateVariables(self) {
	const variables = [
		// Device info
		{ variableId: 'device_name', name: 'Device Name' },
		{ variableId: 'device_model', name: 'Device Model' },
		{ variableId: 'connection_status', name: 'Connection Status' },

		// Input mutes
		{ variableId: 'input_1_mute', name: 'Input 1 Mute' },
		{ variableId: 'input_2_mute', name: 'Input 2 Mute' },
		{ variableId: 'input_3_mute', name: 'Input 3 Mute' },
		{ variableId: 'input_4_mute', name: 'Input 4 Mute' },
		{ variableId: 'input_5_mute', name: 'Input 5 Mute' },
		{ variableId: 'input_6_mute', name: 'Input 6 Mute' },
		{ variableId: 'input_7_mute', name: 'Input 7 Mute' },
		{ variableId: 'input_8_mute', name: 'Input 8 Mute' },

		// Air mode
		{ variableId: 'input_1_air', name: 'Input 1 Air' },
		{ variableId: 'input_2_air', name: 'Input 2 Air' },
		{ variableId: 'input_3_air', name: 'Input 3 Air' },
		{ variableId: 'input_4_air', name: 'Input 4 Air' },
		{ variableId: 'input_5_air', name: 'Input 5 Air' },
		{ variableId: 'input_6_air', name: 'Input 6 Air' },
		{ variableId: 'input_7_air', name: 'Input 7 Air' },
		{ variableId: 'input_8_air', name: 'Input 8 Air' },

		// Input mode (Mic/Line/Inst)
		{ variableId: 'input_1_mode', name: 'Input 1 Mode' },
		{ variableId: 'input_2_mode', name: 'Input 2 Mode' },
		{ variableId: 'input_3_mode', name: 'Input 3 Mode' },
		{ variableId: 'input_4_mode', name: 'Input 4 Mode' },
		{ variableId: 'input_5_mode', name: 'Input 5 Mode' },
		{ variableId: 'input_6_mode', name: 'Input 6 Mode' },
		{ variableId: 'input_7_mode', name: 'Input 7 Mode' },
		{ variableId: 'input_8_mode', name: 'Input 8 Mode' },

		// Output volumes
		{ variableId: 'output_1_volume', name: 'Output 1 Volume' },
		{ variableId: 'output_2_volume', name: 'Output 2 Volume' },
		{ variableId: 'output_3_volume', name: 'Output 3 Volume' },
		{ variableId: 'output_4_volume', name: 'Output 4 Volume' },
		{ variableId: 'output_5_volume', name: 'Output 5 Volume' },
		{ variableId: 'output_6_volume', name: 'Output 6 Volume' },
		{ variableId: 'output_7_volume', name: 'Output 7 Volume' },
		{ variableId: 'output_8_volume', name: 'Output 8 Volume' },
		{ variableId: 'output_9_volume', name: 'Output 9 Volume' },
		{ variableId: 'output_10_volume', name: 'Output 10 Volume' },

		// Monitor controls
		{ variableId: 'monitor_dim', name: 'Monitor Dim' },
		{ variableId: 'talkback', name: 'Talkback' },
	]

	self.setVariableDefinitions(variables)

	// Set initial values
	self.setVariableValues({
		device_name: self.deviceInfo?.name || 'Not connected',
		device_model: self.deviceInfo?.model || '',
		connection_status: self.client?.connected ? 'Connected' : 'Disconnected',
	})
}
