// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';

import { combineLatest, Observable, of } from 'rxjs';
import { ApiInterfaceRx } from '@polkadot/api/types';

import { DerivedBalances } from '../types';
import { drr, memo } from '../util';
import { all } from './all';

export const votingBalances = memo((api: ApiInterfaceRx): (addresses?: (AccountId | AccountIndex | Address | string)[]) => Observable<DerivedBalances[]> => {
  return (addresses?: (AccountId | AccountIndex | Address | string)[]): Observable<DerivedBalances[]> =>
    (
      !addresses || !addresses.length
        ? of([] as DerivedBalances[])
        : combineLatest(addresses.map(all(api)))
    ).pipe(
      drr()
    );
}, true);
