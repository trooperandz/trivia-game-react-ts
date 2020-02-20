import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { State } from 'reducers/types';
import { HomePage } from 'components/pages/HomePage';

export const HomeContainer: FC = () => {
  const formValues = useSelector((state: State) => state.home.formValues);
  const isLoading = useSelector((state: State) => state.home.isLoading);

  return <HomePage reduxFormValues={formValues} isLoading={isLoading} />;
};
