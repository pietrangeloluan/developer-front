import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import { Developer, PageNotFound } from 'pages'

export function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Developer} exact />
        <Route path="/404" component={PageNotFound} />
        <Redirect from="*" to="/404" />
      </Switch>
    </BrowserRouter>
  )
}
