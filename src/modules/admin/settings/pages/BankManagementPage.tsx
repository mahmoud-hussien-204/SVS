import Card from "@/components/Card";

import Title from "@/components/Title";

import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import FeatureSettingsForm from "../components/FeatureSettingsForm";

export const Component = () => {
  usePageTitle("Bank Management");

  return (
    <TransitionPage>
      <Card>
        <Title>Bank Management</Title>
        <FeatureSettingsForm />
      </Card>
    </TransitionPage>
  );
};

Component.displayName = "FeaturePage";
