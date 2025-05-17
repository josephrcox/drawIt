import confetti from 'canvas-confetti';

export function showSuccessToast(message: string) {
	// Create toast element
	const toast = document.createElement('div');
	toast.className = 'toast toast-top toast-end';
	toast.innerHTML = `
        <div class="alert bg-primary/80 text-black border-2 border-primary shadow-lg">
            <span>${message}</span>
        </div>
    `;
	document.body.appendChild(toast);

	// Remove toast after 3 seconds
	setTimeout(() => {
		toast.remove();
	}, 5000);

	// Trigger confetti
	confetti({
		particleCount: 100,
		spread: 70,
		origin: { y: 0.6 },
	});
}
