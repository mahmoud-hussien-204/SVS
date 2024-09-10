import usePageTitle from "@/hooks/usePageTitle";

export const Component = () => {
  usePageTitle("Not Found");
  return <div>NotFoundLayout</div>;
};

Component.displayName = "NotFoundLayout";
