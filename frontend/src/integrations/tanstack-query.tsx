import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const initialQueryClient = new QueryClient();

export function TanstackQueryProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<QueryClientProvider client={initialQueryClient}>
			{children}
		</QueryClientProvider>
	);
}
