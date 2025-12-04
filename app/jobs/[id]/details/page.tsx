import Link from "next/link";

type Props = {
	params: Promise<{ id: string }>;
};

export default async function JobDetails({ params }: Props) {
	const { id } = await params;
	return (
		<div className="min-h-screen bg-white p-12">
			<div className="max-w-2xl mx-auto space-y-8">
				<div>
					<h1 className="text-2xl font-semibold mb-2">Job Details</h1>
					<p className="text-gray-600">Dynamic route parameter: {id}</p>
				</div>

				<div className="border border-gray-200 rounded-lg p-6 space-y-4">
					<div>
						<p className="text-xs font-mono text-gray-500 mb-1">app/jobs/[id]/details/page.tsx</p>
						<p className="text-sm text-gray-700">
							This page uses the App Router with async params.
						</p>
					</div>

					<div className="pt-4 border-t border-gray-200">
						<p className="text-sm font-medium mb-3">Navigate to:</p>
						<div className="flex flex-col gap-2">
							<Link
								href="/"
								className="text-sm border border-gray-300 rounded px-4 py-2 hover:bg-gray-50 transition-colors"
							>
								Home
							</Link>
							<Link
								href={`/jobs/${id}/contact`}
								className="text-sm border border-gray-300 rounded px-4 py-2 hover:bg-gray-50 transition-colors"
							>
								Contact (Pages Router)
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
