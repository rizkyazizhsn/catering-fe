import {
  PreventScrolling,
  RouterBack,
  TModalPostRegistered,
  TModalRegistered,
} from "@/components/Modal";

type Request = {
  searchParams: {
    modal: TModalRegistered;
    "modal-post": TModalPostRegistered;
    [key: string]: string;
  };
};

export default function Page({ searchParams }: Request) {
  if (searchParams.modal) {
    let modalPosition = "items-center";
    let modalWrapper =
      "bg-white rounded-2xl p-4 flex flex-col gap-y-5 max-w-sm relative z-20";

    if (searchParams["modal-post"]) {
      modalPosition = "items-end";
      modalWrapper =
        "bg-white rounded-t-2xl p-4 flex flex-col gap-y-5 max-w-sm w-full shadow-[0px_-12px_30px_0px_#0D082245]";
    }
    return (
      <>
        <div
          className={[
            "fixed inset-0 z-50 bg-color4/80 items-center justify-center",
            modalPosition,
          ].join(" ")}
        >
          <div className={modalWrapper}>
            {/* Render semua content disini, contoh capture dulu if(modal === "siapa") {maka render disini} */}
          </div>

          <RouterBack />
        </div>
        <PreventScrolling />
      </>
    );
  }
  return null;
}
