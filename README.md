# Notes
- This app should only be run against the **tabbed-list-chamber** branch in the ividev repository.
- **itemClick** has a new signature, which is described in a comment above the method declaration.
- A new **getFetchFunctions** method is available for the app to override. It should return an object that contains the function name as a key, and the actual function as the respective key value for any fetch functions specified in the dataTree.
