import usePageTitle from "@/hooks/usePageTitle";

export const Component = () => {
  usePageTitle("Buy Coin");
  return <div>BuyCoinPage</div>;
};

Component.displayName = "BuyCoinPage";
