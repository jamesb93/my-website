import { writable } from 'svelte/store';
import { browser } from '$app/env';

// Durations for all audio files in the thesis
export const durations = writable({});
async function getDurations() {
    try {
        const response = await fetch('/thesis/durations.json')
        durations.set(await response.json())
    } catch(e) {
        console.log(e)
    }
}

if (browser) {
    getDurations()
}