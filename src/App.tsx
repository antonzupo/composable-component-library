import { Puck, Render, type Config } from "@puckeditor/core";
import "@puckeditor/core/puck.css";
import { RadioGroupDataFlowDemo } from "@/components/RadioGroup/RadioGroupDataFlowDemo";
import { config, getPreviewLayoutClassName, type RootLayoutProps } from "@/puck/config";
import { ComponentListWithSearch } from "@/puck/ComponentListWithSearch";
import { IsPuckEditorContext } from "@/puck/editorContext";
import { sampleData } from "@/puck/sampleData";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(sampleData);
  const [isEdit, setIsEdit] = useState(true);

  const rootProps = (data.root?.props ?? {}) as RootLayoutProps;
  const pageName = rootProps.pageName;
  useEffect(() => {
    const name = pageName?.trim();
    document.title = name ? `${name} | Composable` : "Composable";
  }, [pageName]);

  const editToggleButton = (
    <button
      type="button"
      onClick={() => setIsEdit((e) => !e)}
      className="rounded-md border border-border bg-background px-3 py-1.5 text-sm font-medium hover:bg-accent"
    >
      {isEdit ? "Preview" : "Edit"}
    </button>
  );

  return (
    <div className="min-h-screen bg-background">
      {isEdit ? (
        <IsPuckEditorContext.Provider value={true}>
          <Puck
            config={config as Config}
            data={data}
            onPublish={(d) => {
              setData(d);
              console.log(JSON.stringify(d));
            }}
            headerTitle={pageName?.trim() || undefined}
            viewports={[
              { width: 360, height: "auto", icon: "Smartphone", label: "Small" },
              { width: 768, height: "auto", icon: "Tablet", label: "Medium" },
              { width: 1280, height: "auto", icon: "Monitor", label: "Large" },
              { width: "100%", height: "auto", icon: "FullWidth", label: "Full-width" },
            ]}
            overrides={{
              headerActions: ({ children }) => (
                <>
                  {children}
                  {editToggleButton}
                </>
              ),
              drawer: () => <ComponentListWithSearch />,
            }}
          />
        </IsPuckEditorContext.Provider>
      ) : (
        <>
          <div className="border-b border-border bg-muted/30 px-4 py-2 flex items-center justify-end gap-2">
            {editToggleButton}
          </div>
          <div className={getPreviewLayoutClassName(rootProps)}>
            <Render config={config as Config} data={data} />
            <RadioGroupDataFlowDemo />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
