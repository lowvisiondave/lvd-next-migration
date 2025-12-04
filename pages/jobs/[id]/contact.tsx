import Link from "next/link";
import { useRouter } from "next/router";

export default function JobContact() {
	const router = useRouter();
	const { id } = router.query;
	return (
		<div className="min-h-screen bg-white p-12">
			<div className="max-w-2xl mx-auto space-y-8">
				<div>
					<h1 className="text-2xl font-semibold mb-2">Job Contact</h1>
					<p className="text-gray-600">Dynamic route parameter: {id}</p>
				</div>

				<div className="border border-gray-200 rounded-lg p-6 space-y-4">
					<div>
						<p className="text-xs font-mono text-gray-500 mb-1">pages/jobs/[id]/contact.tsx</p>
						<p className="text-sm text-gray-700">
							This page uses the Pages Router with useRouter hook.
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
								href={`/jobs/${id}/details`}
								className="text-sm border border-gray-300 rounded px-4 py-2 hover:bg-gray-50 transition-colors"
							>
								Details (App Router)
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
