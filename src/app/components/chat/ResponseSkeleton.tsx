import SkeletonBlock from "../ui/SkeletonUI";

export default function ResponseSkeleton() {
    return (
        <div className="flex flex-col gap-2 max-w-[85%]">
            <SkeletonBlock className="h-3.5 w-11/12" />
            <SkeletonBlock className="h-3.5 w-4/5" />
            <SkeletonBlock className="h-3.5 w-3/5" />
        </div>
    );
}