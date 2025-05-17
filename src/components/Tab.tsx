import {
  createContext,
  useContext,
  useEffect,
  useState,
  type FC,
  type HTMLAttributes,
  type ReactNode,
} from "react";

import cn from "classnames";

type Tab = {
  id: TUseTabReturnType["activeTabId"];
  title: string;
};

type TUseTabReturnType = {
  tabs: Tab[];
  addTab: (tab: Tab) => void;
  activeTabId: string | number | undefined;
  activateTab: (id: TUseTabReturnType["activeTabId"]) => void;
};

const TabsContext = createContext<TUseTabReturnType>({
  tabs: [],
  addTab: () => {},
  activeTabId: undefined,
  activateTab: () => {},
});

const useTabs = (): TUseTabReturnType => {
  const [tabs, setTabs] = useState<Tab[]>([]);
  const [activeTabId, setActiveTabId] =
    useState<TUseTabReturnType["activeTabId"]>();

  const addTab = (tab: Tab) => {
    setTabs([...tabs, tab]);
  };

  const activateTab = (id: TUseTabReturnType["activeTabId"]) => {
    setActiveTabId(id);
  };

  return { tabs, addTab, activeTabId, activateTab };
};

type TProviderProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const Provider: FC<TProviderProps> = ({ children, ...props }) => {
  const hookValue = useTabs();

  return (
    <div {...props}>
      <TabsContext.Provider value={hookValue}>{children}</TabsContext.Provider>
    </div>
  );
};

type TNavbarProps = {
  children: ReactNode;
};

const Navbar: FC<TNavbarProps> = ({ children }) => {
  return (
    <div className="flex overflow-x-auto border-b border-white/10">
      <div className="flex w-fit">{children}</div>
    </div>
  );
};

type TTriggerProps = {
  id: TUseTabReturnType["activeTabId"];
  title: string;
  defaultActive?: boolean;
};

const Trigger: FC<TTriggerProps> = ({ id, title, defaultActive }) => {
  const { addTab, activeTabId, activateTab } = useContext(TabsContext);

  useEffect(() => {
    if (id) {
      addTab({ id, title });

      if (defaultActive) {
        activateTab(id);
      }
    }
  }, []);

  return (
    <div
      onClick={() => activateTab(id)}
      className={cn(
        "flex h-10 w-24 items-center justify-center",
        activeTabId === id && "bg-custom-gradient border-b border-[#FD4141]",
      )}
    >
      {title}
    </div>
  );
};

type TItemProps = {
  id: string;
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const Item: FC<TItemProps> = ({ id, className, children, ...props }) => {
  const { activeTabId } = useContext(TabsContext);

  return activeTabId === id ? (
    <div className={cn(className)} {...props}>
      {children}
    </div>
  ) : (
    <></>
  );
};

export const Tabs = {
  Provider,
  Navbar,
  Trigger,
  Item,
};
