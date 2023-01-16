import React, { FC, ReactNode } from "react"

import Header from "../Header/Header"

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main>
        <div className="container">
          <div className="page-content">{children}</div>
        </div>
      </main>
    </div>
  )
}

export default Layout
