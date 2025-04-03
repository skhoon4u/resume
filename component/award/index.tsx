import { PropsWithChildren } from 'react';
import ProjectRow from './row';
import { CommonSection } from '../common/CommonSection';
import { IAward } from './IAward';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = IAward.Payload;

export const Award = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title="HONORS AND AWARDS">
      <ProjectRow payload={payload} />
    </CommonSection>
  );
}
