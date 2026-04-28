type ToastVariant = "success" | "error";

interface SetupWeb3FormToastOptions {
	sectionId: string;
	formSelector: string;
	submitButtonSelector: string;
	toastSelector: string;
}

function showToast(
	toast: HTMLDivElement,
	message: string,
	variant: ToastVariant,
	durationMs = 3500
) {
	toast.textContent = message;
	toast.classList.remove("success", "error", "is-visible");
	toast.classList.add(variant, "is-visible");
	window.setTimeout(() => toast.classList.remove("is-visible"), durationMs);
}

export function setupWeb3FormToast(options: SetupWeb3FormToastOptions) {
	const section = document.getElementById(options.sectionId);
	const form = section?.querySelector(options.formSelector);
	const submitButton = section?.querySelector(options.submitButtonSelector);
	const toast = section?.querySelector(options.toastSelector);

	if (!(form instanceof HTMLFormElement) || !(toast instanceof HTMLDivElement)) {
		return;
	}

	form.addEventListener("submit", async (event) => {
		event.preventDefault();
		const payload = new FormData(form);

		if (submitButton instanceof HTMLButtonElement) {
			submitButton.disabled = true;
			submitButton.textContent = "Submitting...";
		}

		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: payload
			});
			const data = await response.json();

			if (data.success) {
				form.reset();
				showToast(toast, "Request submitted successfully. We will reach out soon.", "success");
			} else {
				showToast(toast, "Submission failed. Please try again.", "error");
			}
		} catch {
			showToast(toast, "Network error. Please try again in a moment.", "error");
		} finally {
			if (submitButton instanceof HTMLButtonElement) {
				submitButton.disabled = false;
				submitButton.textContent = "Request Access";
			}
		}
	});
}
