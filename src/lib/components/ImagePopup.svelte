<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';

	interface Props {
		open?: boolean;
		imageUrl?: string;
		imageAlt?: string;
	}

	let { open = $bindable(false), imageUrl = '', imageAlt = '' }: Props = $props();
</script>

<Dialog.Root bind:open>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Image Preview</Dialog.Title>
			<Dialog.Description>
				{imageAlt}
			</Dialog.Description>
		</Dialog.Header>
		<!-- Image content will go here -->
	</Dialog.Content>
</Dialog.Root>
