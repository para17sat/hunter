document.getElementById("body").className =
  "bg-slate-500 font-mono text-gray-800";
document.getElementById("main").className = "flex justify-center p-6";
document.getElementById("article").className =
  "bg-white max-w-2xl rounded-2xl shadow-lg p-6 md:p-10";

document.getElementById("image").className = "rounded-xl mb-6 w-full";
document.getElementById("title").className = "text-4xl font-bold mb-4";
document.getElementById("description").className = "mb-6";

document.getElementById("prep-section").className =
  "bg-slate-300 p-4 rounded-lg mb-6";
document.getElementById("prep-title").className =
  "text-lg font-semibold mb-2 text-sky-700";
document.getElementById("prep-list").className =
  "list-disc list-inside space-y-1 text-sm";

document.querySelector("#ingredients-section h2").className =
  "text-2xl font-medium mb-2 text-sky-800";
document.querySelector("#ingredients-section ul").className =
  "list-disc list-inside space-y-1 mb-6";

document.querySelector("#instructions-section h2").className =
  "text-2xl font-normal mb-2 text-sky-800";
document.querySelector("#instructions-section ol").className =
  "list-decimal list-inside space-y-2 mb-6";

document.querySelector("#nutrition-section h2").className =
  "text-2xl font-normal mb-2 text-sky-800";
document.querySelector("#nutrition-section p").className =
  "mb-2 text-sm text-gray-600";
document.querySelector("#nutrition-section table").className =
  "w-full text-left border-t border-gray-200";
document.querySelector("#nutrition-section tbody").className =
  "divide-y divide-gray-200";

document.querySelectorAll("#nutrition-section tr").forEach((tr) => {
  tr.children[0].className = "py-2 font-medium";
  tr.children[1].className = "py-2";
});
