import * as React from "react";
import { AppBar, Link } from "@material-ui/core";
export function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <AppBar>
        <Link href="#/home" underline="none">
          home
        </Link>
        <Link href="#/cdog" underline="none">
          cdog
        </Link>
        <Link href="#/cnft" underline="none">
          cnft
        </Link>
        <Link href="#/cswap" underline="none">
          cswap
        </Link>
      </AppBar>
      {children}
    </div>
  );
}
