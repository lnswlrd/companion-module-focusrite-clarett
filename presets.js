/**
 * Focusrite Clarett Presets
 *
 * Pre-configured buttons for common operations
 */

import { combineRgb } from '@companion-module/base'

export function getPresets() {
	const presets = {}

	// ============================================
	// INPUT MUTE PRESETS (Mix 1)
	// ============================================
	for (let i = 1; i <= 8; i++) {
		presets[`mute_input_${i}`] = {
			type: 'button',
			category: 'Input Mutes',
			name: `Mute Input ${i}`,
			style: {
				text: `MUTE\\nIN ${i}`,
				size: '14',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'mute_input',
							options: { channel: i, mix: 1, state: 'toggle' },
						},
					],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: 'input_muted',
					options: { channel: i, mix: 1 },
					style: {
						bgcolor: combineRgb(255, 0, 0),
						color: combineRgb(255, 255, 255),
					},
				},
			],
		}
	}

	// ============================================
	// INPUT SOLO PRESETS (Mix 1)
	// ============================================
	for (let i = 1; i <= 8; i++) {
		presets[`solo_input_${i}`] = {
			type: 'button',
			category: 'Input Solos',
			name: `Solo Input ${i}`,
			style: {
				text: `SOLO\\nIN ${i}`,
				size: '14',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'solo_input',
							options: { channel: i, mix: 1, state: 'toggle' },
						},
					],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: 'input_soloed',
					options: { channel: i, mix: 1 },
					style: {
						bgcolor: combineRgb(255, 255, 0),
						color: combineRgb(0, 0, 0),
					},
				},
			],
		}
	}

	// ============================================
	// PHANTOM POWER PRESETS
	// ============================================
	for (let i = 1; i <= 8; i++) {
		presets[`phantom_${i}`] = {
			type: 'button',
			category: 'Phantom Power',
			name: `Phantom ${i}`,
			style: {
				text: `48V\\nCH ${i}`,
				size: '14',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'set_phantom',
							options: { channel: i, state: 'toggle' },
						},
					],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: 'phantom_enabled',
					options: { channel: i },
					style: {
						bgcolor: combineRgb(255, 128, 0),
						color: combineRgb(0, 0, 0),
					},
				},
			],
		}
	}

	// ============================================
	// AIR MODE PRESETS
	// ============================================
	for (let i = 1; i <= 8; i++) {
		presets[`air_${i}`] = {
			type: 'button',
			category: 'Air Mode',
			name: `Air ${i}`,
			style: {
				text: `AIR\\nCH ${i}`,
				size: '14',
				color: combineRgb(0, 0, 0),
				bgcolor: combineRgb(64, 64, 64),
			},
			steps: [
				{
					down: [
						{
							actionId: 'set_air',
							options: { channel: i, state: 'toggle' },
						},
					],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: 'air_enabled',
					options: { channel: i },
					style: {
						bgcolor: combineRgb(255, 204, 0), // Yellow like Clarett LED
						color: combineRgb(0, 0, 0),
					},
				},
			],
		}
	}

	// ============================================
	// INPUT MODE PRESETS
	// ============================================
	for (let i = 1; i <= 8; i++) {
		presets[`mode_${i}`] = {
			type: 'button',
			category: 'Input Mode',
			name: `Mode ${i}`,
			style: {
				text: `MODE\\nCH ${i}`,
				size: '14',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(64, 64, 64),
			},
			steps: [
				{
					down: [
						{
							actionId: 'cycle_mode',
							options: { channel: i },
						},
					],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: 'mode_mic',
					options: { channel: i },
					style: {
						bgcolor: combineRgb(255, 0, 0), // Bright red
						color: combineRgb(255, 255, 255),
						text: `MIC\\nCH ${i}`,
					},
				},
				{
					feedbackId: 'mode_line',
					options: { channel: i },
					style: {
						bgcolor: combineRgb(102, 0, 0), // Dark red
						color: combineRgb(255, 255, 255),
						text: `LINE\\nCH ${i}`,
					},
				},
				{
					feedbackId: 'mode_inst',
					options: { channel: i },
					style: {
						bgcolor: combineRgb(255, 102, 170), // Pink
						color: combineRgb(0, 0, 0),
						text: `INST\\nCH ${i}`,
					},
				},
			],
		}
	}

	// ============================================
	// PAD PRESETS
	// ============================================
	for (let i = 1; i <= 8; i++) {
		presets[`pad_${i}`] = {
			type: 'button',
			category: 'Pad',
			name: `Pad ${i}`,
			style: {
				text: `PAD\\nCH ${i}`,
				size: '14',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'set_pad',
							options: { channel: i, state: 'toggle' },
						},
					],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: 'pad_enabled',
					options: { channel: i },
					style: {
						bgcolor: combineRgb(0, 128, 255),
						color: combineRgb(255, 255, 255),
					},
				},
			],
		}
	}

	// ============================================
	// HPF PRESETS
	// ============================================
	for (let i = 1; i <= 8; i++) {
		presets[`hpf_${i}`] = {
			type: 'button',
			category: 'High Pass Filter',
			name: `HPF ${i}`,
			style: {
				text: `HPF\\nCH ${i}`,
				size: '14',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'set_hpf',
							options: { channel: i, state: 'toggle' },
						},
					],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: 'hpf_enabled',
					options: { channel: i },
					style: {
						bgcolor: combineRgb(128, 0, 255),
						color: combineRgb(255, 255, 255),
					},
				},
			],
		}
	}

	// ============================================
	// MONITOR PRESETS
	// ============================================
	presets['dim'] = {
		type: 'button',
		category: 'Monitor',
		name: 'Dim',
		style: {
			text: 'DIM',
			size: '18',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(0, 0, 0),
		},
		steps: [
			{
				down: [{ actionId: 'set_dim', options: { state: 'toggle' } }],
				up: [],
			},
		],
		feedbacks: [
			{
				feedbackId: 'dim_enabled',
				options: {},
				style: {
					bgcolor: combineRgb(180, 80, 0),
					color: combineRgb(255, 255, 255),
				},
			},
		],
	}

	presets['talkback'] = {
		type: 'button',
		category: 'Monitor',
		name: 'Talkback',
		style: {
			text: 'TALK',
			size: '18',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(0, 0, 0),
		},
		steps: [
			{
				down: [
					{
						actionId: 'set_talkback',
						options: { state: 'on' },
					},
				],
				up: [
					{
						actionId: 'set_talkback',
						options: { state: 'off' },
					},
				],
			},
		],
		feedbacks: [
			{
				feedbackId: 'talkback_enabled',
				options: {},
				style: {
					bgcolor: combineRgb(0, 255, 0),
					color: combineRgb(0, 0, 0),
				},
			},
		],
	}

	return presets
}
