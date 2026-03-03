import { Puck, Render, type Config } from "@puckeditor/core";
import "@puckeditor/core/puck.css";
import { config } from "@/puck/config";
import { sampleData } from "@/puck/sampleData";
import { useState } from "react";

function App() {
  const [data, setData] = useState(sampleData);
  const [isEdit, setIsEdit] = useState(true);

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
        <Puck
          config={config as Config}
          data={data}
          onPublish={(d) => {
            setData(d);
            console.log(JSON.stringify(d));
          }}
          overrides={{
            headerActions: ({ children }) => (
              <>
                {children}
                {editToggleButton}
              </>
            ),
          }}
        />
      ) : (
        <>
          <div className="border-b border-border bg-muted/30 px-4 py-2 flex items-center justify-end gap-2">
            {editToggleButton}
          </div>
          <div className="mx-auto max-w-6xl p-6">
            <Render config={config as Config} data={data} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
