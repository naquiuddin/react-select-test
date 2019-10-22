import Pure from './pure';
import Hooks from './hooks';
import { pipe } from '@synvox/rehook';

const SelectWithSearch = pipe(
  Hooks,
  Pure
);

export default SelectWithSearch;
