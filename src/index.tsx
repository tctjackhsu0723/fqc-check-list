import React from "react";
import { createRoot } from "react-dom/client";
import "pikaday/css/pikaday.css";
import "./styles.css";
import { HotTable, HotColumn } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";

import { data1 } from "./data1/fqc-check-list-demo-data1";
import { data21 } from "./data2/fqc-check-list-demo-data21";
import { data22 } from "./data2/fqc-check-list-demo-data22";
import { data23 } from "./data2/fqc-check-list-demo-data23";
import { data24 } from "./data2/fqc-check-list-demo-data24";
import { data31 } from "./data3/fqc-check-list-demo-data31";
import { data32 } from "./data3/fqc-check-list-demo-data32";
import { data33 } from "./data3/fqc-check-list-demo-data33";
import { data34 } from "./data3/fqc-check-list-demo-data34";
import { data35 } from "./data3/fqc-check-list-demo-data35";
import { data41 } from "./data4/fqc-check-list-demo-data41";
import { data42 } from "./data4/fqc-check-list-demo-data42";
import { data43 } from "./data4/fqc-check-list-demo-data43";
import { data44 } from "./data4/fqc-check-list-demo-data44";
import { data45 } from "./data4/fqc-check-list-demo-data45";
import { data46 } from "./data4/fqc-check-list-demo-data46";
import { data51 } from "./data5/fqc-check-list-demo-data51";
import { data52 } from "./data5/fqc-check-list-demo-data52";
import { data53 } from "./data5/fqc-check-list-demo-data53";
import { data54 } from "./data5/fqc-check-list-demo-data54";
import { data55 } from "./data5/fqc-check-list-demo-data55";
import { data61 } from "./data6/fqc-check-list-demo-data61";
import { data62 } from "./data6/fqc-check-list-demo-data62";
import { data63 } from "./data6/fqc-check-list-demo-data63";
import { data64 } from "./data6/fqc-check-list-demo-data64";
// import { ProgressBarRenderer } from "./renderers/ProgressBar";
// import { StarsRenderer } from "./renderers/Stars";

// import {
//   drawCheckboxInRowHeaders,
//   addClassesToRows,
//   changeCheckboxCell,
//   alignHeaders
// } from "./hooksCallbacks";

import "handsontable/dist/handsontable.min.css";

// register Handsontable's modules
registerAllModules();

const twidth = "1339.8";
const trowHeights = "auto";

const App1 = () => {
  return (
    <HotTable
      data={data1}
      height="auto"
      width={twidth}
      colWidths={[208.3, 148.3, 208.3, 208.3, 208.3]}
      colHeaders={true}
      rowHeaders={false}
      rowHeights={trowHeights}
      nestedHeaders={[["檢驗項目", "生產", "過半複驗", "維修", "快速維修 "]]}
      hiddenColumns={true}
      dropdownMenu={true}
      // hiddenColumns={{
      //   indicators: true
      // }}
      contextMenu={true}
      multiColumnSorting={true}
      filters={true}
      stretchH="all"
      className="custom-table"
      licenseKey="non-commercial-and-evaluation"
    >
      <HotColumn data={0} readOnly={true} className="htCenter htMiddle" />
      <HotColumn data={1} readOnly={true} className="htCenter htMiddle" />
      <HotColumn data={2} readOnly={true} className="htCenter htMiddle" />
      <HotColumn data={3} readOnly={true} className="htCenter htMiddle" />
      <HotColumn data={4} readOnly={true} className="htCenter htMiddle" />
    </HotTable>
  );
};

// header 版型，MiTAP FQC 總表
const App21 = () => {
  return (
    <HotTable
      data={data21}
      height="auto"
      width={twidth}
      colWidths={[258.3, 148.3, 183.3, 148.3, 183.3, 148.3, 103.3, 166.7]}
      colHeaders={false}
      rowHeaders={false}
      rowHeights={trowHeights}
      hiddenColumns={true}
      dropdownMenu={true}
      // hiddenColumns={{
      //   indicators: true
      // }}
      contextMenu={true}
      multiColumnSorting={true}
      filters={true}
      // afterGetColHeader={alignHeaders}
      // beforeRenderer={addClassesToRows}
      // afterGetRowHeader={drawCheckboxInRowHeaders}
      // afterOnCellMouseDown={changeCheckboxCell}
      // manualRowMove={true}
      stretchH="all"
      className="custom-table"
      licenseKey="non-commercial-and-evaluation"
      mergeCells={[{ row: 0, col: 0, rowspan: 1, colspan: 4 }]}
      cell={[
        { row: 0, col: 0, readOnly: true },
        { row: 0, col: 4, readOnly: true },
        { row: 0, col: 6, readOnly: true },
        { row: 1, col: 0, readOnly: true },
        { row: 1, col: 2, readOnly: true },
        { row: 1, col: 4, readOnly: true },
        { row: 1, col: 6, readOnly: true },
        { row: 2, col: 0, readOnly: true },
        { row: 2, col: 2, readOnly: true },
        { row: 2, col: 4, readOnly: true },
        { row: 2, col: 6, readOnly: true },
      ]}
    >
      <HotColumn data={0} className="htCenter htMiddle" />
      <HotColumn data={1} className="htCenter htMiddle" />
      <HotColumn data={2} className="htCenter htMiddle" />
      <HotColumn data={3} className="htCenter htMiddle" />
      <HotColumn data={4} className="htCenter htMiddle" />
      <HotColumn data={5} className="htCenter htMiddle" />
      <HotColumn data={6} className="htCenter htMiddle" />
      <HotColumn data={7} className="htCenter htMiddle" />
    </HotTable>
  );
};

// pass/fail/done 版型，檢驗項目
const App22 = () => {
  return (
    <HotTable
      data={data22}
      height="auto"
      width={twidth}
      colWidths={[406.6, 331.6, 601.6]}
      colHeaders={false}
      rowHeaders={false}
      rowHeights={trowHeights}
      hiddenColumns={true}
      dropdownMenu={true}
      // hiddenColumns={{
      //   indicators: true
      // }}
      contextMenu={true}
      multiColumnSorting={true}
      filters={true}
      // afterGetColHeader={alignHeaders}
      // beforeRenderer={addClassesToRows}
      // afterGetRowHeader={drawCheckboxInRowHeaders}
      // afterOnCellMouseDown={changeCheckboxCell}
      // manualRowMove={true}
      stretchH="all"
      className="custom-table"
      licenseKey="non-commercial-and-evaluation"
      mergeCells={[{ row: 0, col: 0, rowspan: 1, colspan: 3 }]}
      cell={[
        {
          row: 0,
          col: 0,
          className: "htCenter htMiddle",
        },
        {
          row: 1,
          col: 0,
          className: "htCenter htMiddle",
          readOnly: true,
        },
        {
          row: 1,
          col: 1,
          className: "htCenter htMiddle",
          readOnly: true,
          type: "text",
        },
        {
          row: 1,
          col: 2,
          className: "htCenter htMiddle",
          readOnly: true,
        },
      ]}
    >
      <HotColumn data={0} className="htMiddle" readOnly={true} />
      <HotColumn data={1} className="htCenter htMiddle" type="checkbox" />
      <HotColumn data={2} className="htMiddle" />
    </HotTable>
  );
};

// 總結 版型
const App23 = () => {
  return (
    <HotTable
      data={data23}
      height="auto"
      width={twidth}
      colWidths={[738.2, 601.6]}
      colHeaders={false}
      rowHeaders={false}
      rowHeights={trowHeights}
      hiddenColumns={true}
      dropdownMenu={true}
      // hiddenColumns={{
      //   indicators: true
      // }}
      contextMenu={true}
      multiColumnSorting={true}
      filters={true}
      // afterGetColHeader={alignHeaders}
      // beforeRenderer={addClassesToRows}
      // afterGetRowHeader={drawCheckboxInRowHeaders}
      // afterOnCellMouseDown={changeCheckboxCell}
      // manualRowMove={true}
      stretchH="all"
      className="custom-table"
      licenseKey="non-commercial-and-evaluation"
      mergeCells={[{ row: 0, col: 0, rowspan: 1, colspan: 2 }]}
      cell={[
        {
          row: 0,
          col: 0,
          className: "htCenter htMiddle",
          readOnly: true,
        },
        {
          row: 1,
          col: 0,
          className: "htCenter htMiddle",
          readOnly: true,
        },
      ]}
    >
      <HotColumn data={0} className="htCenter htMiddle" />
      <HotColumn data={1} className="htCenter htMiddle" />
    </HotTable>
  );
};

// 備註與簽名
const App24 = () => {
  return (
    <HotTable
      data={data24}
      height="auto"
      width={twidth}
      colWidths={[258.3, 148.3, 183.3, 148.3, 183.3, 148.3, 103.3, 166.7]}
      colHeaders={false}
      rowHeaders={false}
      rowHeights={trowHeights}
      hiddenColumns={true}
      dropdownMenu={true}
      // hiddenColumns={{
      //   indicators: true
      // }}
      contextMenu={true}
      multiColumnSorting={true}
      filters={true}
      // afterGetColHeader={alignHeaders}
      // beforeRenderer={addClassesToRows}
      // afterGetRowHeader={drawCheckboxInRowHeaders}
      // afterOnCellMouseDown={changeCheckboxCell}
      // manualRowMove={true}
      stretchH="all"
      className="custom-table"
      licenseKey="non-commercial-and-evaluation"
      cell={[
        {
          row: 0,
          col: 0,
          className: "htMiddle",
          readOnly: true,
        },
      ]}
    >
      <HotColumn data={0} className="htMiddle" />
      <HotColumn data={1} className="htCenter htMiddle" />
      <HotColumn data={2} className="htCenter htMiddle" />
      <HotColumn data={3} className="htCenter htMiddle" />
      <HotColumn data={4} className="htCenter htMiddle" />
      <HotColumn data={5} className="htCenter htMiddle" />
      <HotColumn data={6} className="htCenter htMiddle" />
      <HotColumn data={7} className="htCenter htMiddle" />
    </HotTable>
  );
};

// header 版型，MiTAP FQC 總表
const App31 = () => {
  return (
    <HotTable
      data={data31}
      height="auto"
      width={twidth}
      colWidths={[258.3, 148.3, 183.3, 148.3, 183.3, 148.3, 103.3, 166.7]}
      colHeaders={false}
      rowHeaders={false}
      rowHeights={trowHeights}
      hiddenColumns={true}
      dropdownMenu={true}
      // hiddenColumns={{
      //   indicators: true
      // }}
      contextMenu={true}
      multiColumnSorting={true}
      filters={true}
      // afterGetColHeader={alignHeaders}
      // beforeRenderer={addClassesToRows}
      // afterGetRowHeader={drawCheckboxInRowHeaders}
      // afterOnCellMouseDown={changeCheckboxCell}
      // manualRowMove={true}
      stretchH="all"
      className="custom-table"
      licenseKey="non-commercial-and-evaluation"
      mergeCells={[{ row: 0, col: 0, rowspan: 1, colspan: 4 }]}
      cell={[
        { row: 0, col: 0, readOnly: true },
        { row: 0, col: 4, readOnly: true },
        { row: 0, col: 6, readOnly: true },
      ]}
    >
      <HotColumn data={0} className="htCenter htMiddle" />
      <HotColumn data={1} className="htCenter htMiddle" />
      <HotColumn data={2} className="htCenter htMiddle" />
      <HotColumn data={3} className="htCenter htMiddle" />
      <HotColumn data={4} className="htCenter htMiddle" />
      <HotColumn data={5} className="htCenter htMiddle" />
      <HotColumn data={6} className="htCenter htMiddle" />
      <HotColumn data={7} className="htCenter htMiddle" />
    </HotTable>
  );
};

// pass/fail/done 版型，檢驗項目
const App32 = () => {
  return (
    <HotTable
      data={data32}
      height="auto"
      width={twidth}
      colWidths={[406.6, 331.6, 601.6]}
      colHeaders={false}
      rowHeaders={false}
      rowHeights={trowHeights}
      hiddenColumns={true}
      dropdownMenu={true}
      // hiddenColumns={{
      //   indicators: true
      // }}
      contextMenu={true}
      multiColumnSorting={true}
      filters={true}
      // afterGetColHeader={alignHeaders}
      // beforeRenderer={addClassesToRows}
      // afterGetRowHeader={drawCheckboxInRowHeaders}
      // afterOnCellMouseDown={changeCheckboxCell}
      // manualRowMove={true}
      stretchH="all"
      className="custom-table"
      licenseKey="non-commercial-and-evaluation"
      mergeCells={[{ row: 0, col: 0, rowspan: 1, colspan: 3 }]}
      cell={[
        {
          row: 0,
          col: 0,
          className: "htCenter htMiddle",
        },
        {
          row: 1,
          col: 0,
          className: "htCenter htMiddle",
          readOnly: true,
        },
        {
          row: 1,
          col: 1,
          className: "htCenter htMiddle",
          readOnly: true,
          type: "text",
        },
        {
          row: 1,
          col: 2,
          className: "htCenter htMiddle",
          readOnly: true,
        },
      ]}
    >
      <HotColumn data={0} className="htMiddle" readOnly={true} />
      <HotColumn data={1} className="htCenter htMiddle" type="checkbox" />
      <HotColumn data={2} className="htMiddle" />
    </HotTable>
  );
};

// pass/fail/done 版型，檢驗項目
const App33 = () => {
  return (
    <HotTable
      data={data33}
      height="auto"
      width={twidth}
      colWidths={[406.6, 331.6, 601.6]}
      colHeaders={false}
      rowHeaders={false}
      rowHeights={trowHeights}
      hiddenColumns={true}
      dropdownMenu={true}
      // hiddenColumns={{
      //   indicators: true
      // }}
      contextMenu={true}
      multiColumnSorting={true}
      filters={true}
      // afterGetColHeader={alignHeaders}
      // beforeRenderer={addClassesToRows}
      // afterGetRowHeader={drawCheckboxInRowHeaders}
      // afterOnCellMouseDown={changeCheckboxCell}
      // manualRowMove={true}
      stretchH="all"
      className="custom-table"
      licenseKey="non-commercial-and-evaluation"
      mergeCells={[{ row: 0, col: 0, rowspan: 1, colspan: 3 }]}
      cell={[
        {
          row: 0,
          col: 0,
          className: "htCenter htMiddle",
        },
        {
          row: 1,
          col: 0,
          className: "htCenter htMiddle",
          readOnly: true,
        },
        {
          row: 1,
          col: 1,
          className: "htCenter htMiddle",
          readOnly: true,
          type: "text",
        },
        {
          row: 1,
          col: 2,
          className: "htCenter htMiddle",
          readOnly: true,
        },
      ]}
    >
      <HotColumn data={0} className="htMiddle" readOnly={true} />
      <HotColumn data={1} className="htCenter htMiddle" type="checkbox" />
      <HotColumn data={2} className="htMiddle" />
    </HotTable>
  );
};

// pass/fail/done 版型，檢驗項目
const App34 = () => {
  return (
    <HotTable
      data={data34}
      height="auto"
      width={twidth}
      colWidths={[406.6, 331.6, 601.6]}
      colHeaders={false}
      rowHeaders={false}
      rowHeights={trowHeights}
      hiddenColumns={true}
      dropdownMenu={true}
      // hiddenColumns={{
      //   indicators: true
      // }}
      contextMenu={true}
      multiColumnSorting={true}
      filters={true}
      // afterGetColHeader={alignHeaders}
      // beforeRenderer={addClassesToRows}
      // afterGetRowHeader={drawCheckboxInRowHeaders}
      // afterOnCellMouseDown={changeCheckboxCell}
      // manualRowMove={true}
      stretchH="all"
      className="custom-table"
      licenseKey="non-commercial-and-evaluation"
      mergeCells={[{ row: 0, col: 0, rowspan: 1, colspan: 3 }]}
      cell={[
        {
          row: 0,
          col: 0,
          className: "htCenter htMiddle",
        },
        {
          row: 1,
          col: 0,
          className: "htCenter htMiddle",
          readOnly: true,
        },
        {
          row: 1,
          col: 1,
          className: "htCenter htMiddle",
          readOnly: true,
          type: "text",
        },
        {
          row: 1,
          col: 2,
          className: "htCenter htMiddle",
          readOnly: true,
        },
      ]}
    >
      <HotColumn data={0} className="htMiddle" readOnly={true} />
      <HotColumn data={1} className="htCenter htMiddle" type="checkbox" />
      <HotColumn data={2} className="htMiddle" />
    </HotTable>
  );
};

// 備註與簽名
const App35 = () => {
  return (
    <HotTable
      data={data35}
      height="auto"
      width={twidth}
      colWidths={[258.3, 148.3, 183.3, 148.3, 183.3, 148.3, 103.3, 166.7]}
      colHeaders={false}
      rowHeaders={false}
      rowHeights={trowHeights}
      hiddenColumns={true}
      dropdownMenu={true}
      // hiddenColumns={{
      //   indicators: true
      // }}
      contextMenu={true}
      multiColumnSorting={true}
      filters={true}
      // afterGetColHeader={alignHeaders}
      // beforeRenderer={addClassesToRows}
      // afterGetRowHeader={drawCheckboxInRowHeaders}
      // afterOnCellMouseDown={changeCheckboxCell}
      // manualRowMove={true}
      stretchH="all"
      className="custom-table"
      licenseKey="non-commercial-and-evaluation"
      cell={[
        {
          row: 0,
          col: 0,
          className: "htMiddle",
          readOnly: true,
        },
      ]}
    >
      <HotColumn data={0} className="htMiddle" />
      <HotColumn data={1} className="htCenter htMiddle" />
      <HotColumn data={2} className="htCenter htMiddle" />
      <HotColumn data={3} className="htCenter htMiddle" />
      <HotColumn data={4} className="htCenter htMiddle" />
      <HotColumn data={5} className="htCenter htMiddle" />
      <HotColumn data={6} className="htCenter htMiddle" />
      <HotColumn data={7} className="htCenter htMiddle" />
    </HotTable>
  );
};

// compoundsdata 版型
const App41 = () => {
  return (
    <HotTable
      data={data41}
      height="auto"
      width={twidth}
      colWidths={[231.7, 231.7, 175.28, 175.28, 175.28, 175.28, 175.28]}
      colHeaders={false}
      rowHeaders={false}
      rowHeights={trowHeights}
      hiddenColumns={true}
      dropdownMenu={true}
      // hiddenColumns={{
      //   indicators: true
      // }}
      contextMenu={true}
      multiColumnSorting={true}
      filters={true}
      // afterGetColHeader={alignHeaders}
      // beforeRenderer={addClassesToRows}
      // afterGetRowHeader={drawCheckboxInRowHeaders}
      // afterOnCellMouseDown={changeCheckboxCell}
      // manualRowMove={true}
      stretchH="all"
      className="custom-table"
      licenseKey="non-commercial-and-evaluation"
      mergeCells={[
        { row: 0, col: 0, rowspan: 1, colspan: 7 },
        { row: 2, col: 0, rowspan: 40, colspan: 1 },
      ]}
      cell={[
        { row: 0, col: 0, readOnly: true },
        { row: 1, col: 0, readOnly: true },
        { row: 1, col: 1, readOnly: true },
        { row: 1, col: 2, readOnly: true },
        { row: 1, col: 3, readOnly: true },
        { row: 1, col: 4, readOnly: true },
        { row: 1, col: 5, readOnly: true },
        { row: 1, col: 6, readOnly: true },
      ]}
    >
      <HotColumn data={0} className="htCenter htMiddle" readOnly={true} />
      <HotColumn data={1} className="htCenter htMiddle" />
      <HotColumn data={2} className="htCenter htMiddle" />
      <HotColumn data={3} className="htCenter htMiddle" />
      <HotColumn data={4} className="htCenter htMiddle" />
      <HotColumn data={5} className="htCenter htMiddle" />
      <HotColumn data={6} className="htCenter htMiddle" />
      <HotColumn data={7} className="htCenter htMiddle" />
    </HotTable>
  );
};

// compoundsdata 版型
const App42 = () => {
  return (
    <HotTable
      data={data42}
      height="auto"
      width={twidth}
      colWidths={[231.7, 231.7, 175.28, 175.28, 175.28, 175.28, 175.28]}
      colHeaders={false}
      rowHeaders={false}
      rowHeights={trowHeights}
      hiddenColumns={true}
      dropdownMenu={true}
      // hiddenColumns={{
      //   indicators: true
      // }}
      contextMenu={true}
      multiColumnSorting={true}
      filters={true}
      // afterGetColHeader={alignHeaders}
      // beforeRenderer={addClassesToRows}
      // afterGetRowHeader={drawCheckboxInRowHeaders}
      // afterOnCellMouseDown={changeCheckboxCell}
      // manualRowMove={true}
      stretchH="all"
      className="custom-table"
      licenseKey="non-commercial-and-evaluation"
      mergeCells={[
        { row: 0, col: 0, rowspan: 1, colspan: 7 },
        { row: 2, col: 0, rowspan: 40, colspan: 1 },
      ]}
      cell={[
        { row: 0, col: 0, readOnly: true },
        { row: 1, col: 0, readOnly: true },
        { row: 1, col: 1, readOnly: true },
        { row: 1, col: 2, readOnly: true },
        { row: 1, col: 3, readOnly: true },
        { row: 1, col: 4, readOnly: true },
        { row: 1, col: 5, readOnly: true },
        { row: 1, col: 6, readOnly: true },
      ]}
    >
      <HotColumn data={0} className="htCenter htMiddle" readOnly={true} />
      <HotColumn data={1} className="htCenter htMiddle" />
      <HotColumn data={2} className="htCenter htMiddle" />
      <HotColumn data={3} className="htCenter htMiddle" />
      <HotColumn data={4} className="htCenter htMiddle" />
      <HotColumn data={5} className="htCenter htMiddle" />
      <HotColumn data={6} className="htCenter htMiddle" />
      <HotColumn data={7} className="htCenter htMiddle" />
    </HotTable>
  );
};

// compoundsdata 版型
const App43 = () => {
  return (
    <HotTable
      data={data43}
      height="auto"
      width="463.4"
      colWidths={[231.7, 231.7]}
      colHeaders={false}
      rowHeaders={false}
      rowHeights={trowHeights}
      hiddenColumns={true}
      dropdownMenu={true}
      // hiddenColumns={{
      //   indicators: true
      // }}
      contextMenu={true}
      multiColumnSorting={true}
      filters={true}
      // afterGetColHeader={alignHeaders}
      // beforeRenderer={addClassesToRows}
      // afterGetRowHeader={drawCheckboxInRowHeaders}
      // afterOnCellMouseDown={changeCheckboxCell}
      // manualRowMove={true}
      stretchH="all"
      className="custom-table"
      licenseKey="non-commercial-and-evaluation"
      mergeCells={[
        { row: 0, col: 0, rowspan: 1, colspan: 2 },
        { row: 43, col: 0, rowspan: 1, colspan: 2 },
      ]}
      cell={[
        { row: 0, col: 0, readOnly: true },
        { row: 1, col: 0, readOnly: true },
        { row: 1, col: 1, readOnly: true },
        { row: 43, col: 0, readOnly: true },
        { row: 44, col: 0, readOnly: true },
        { row: 44, col: 1, readOnly: true },
      ]}
    >
      <HotColumn data={0} className="htCenter htMiddle" />
      <HotColumn data={1} className="htCenter htMiddle" />
      {/* <HotColumn data={2} className="htCenter htMiddle" />
      <HotColumn data={3} className="htCenter htMiddle" />
      <HotColumn data={4} className="htCenter htMiddle" />
      <HotColumn data={5} className="htCenter htMiddle" />
      <HotColumn data={6} className="htCenter htMiddle" />
      <HotColumn data={7} className="htCenter htMiddle" /> */}
    </HotTable>
  );
};

// compoundsdata 版型
const App44 = () => {
  return (
    <HotTable
      data={data44}
      height="auto"
      width={twidth}
      colWidths={[231.7, 231.7, 175.28, 175.28, 175.28, 175.28, 175.28]}
      colHeaders={false}
      rowHeaders={false}
      rowHeights={trowHeights}
      hiddenColumns={true}
      dropdownMenu={true}
      // hiddenColumns={{
      //   indicators: true
      // }}
      contextMenu={true}
      multiColumnSorting={true}
      filters={true}
      // afterGetColHeader={alignHeaders}
      // beforeRenderer={addClassesToRows}
      // afterGetRowHeader={drawCheckboxInRowHeaders}
      // afterOnCellMouseDown={changeCheckboxCell}
      // manualRowMove={true}
      stretchH="all"
      className="custom-table"
      licenseKey="non-commercial-and-evaluation"
      mergeCells={[
        { row: 0, col: 0, rowspan: 1, colspan: 7 },
        { row: 2, col: 0, rowspan: 40, colspan: 1 },
      ]}
      cell={[
        { row: 0, col: 0, readOnly: true },
        { row: 1, col: 0, readOnly: true },
        { row: 1, col: 1, readOnly: true },
        { row: 1, col: 2, readOnly: true },
        { row: 1, col: 3, readOnly: true },
        { row: 1, col: 4, readOnly: true },
        { row: 1, col: 5, readOnly: true },
        { row: 1, col: 6, readOnly: true },
      ]}
    >
      <HotColumn data={0} className="htCenter htMiddle" readOnly={true} />
      <HotColumn data={1} className="htCenter htMiddle" />
      <HotColumn data={2} className="htCenter htMiddle" />
      <HotColumn data={3} className="htCenter htMiddle" />
      <HotColumn data={4} className="htCenter htMiddle" />
      <HotColumn data={5} className="htCenter htMiddle" />
      <HotColumn data={6} className="htCenter htMiddle" />
      <HotColumn data={7} className="htCenter htMiddle" />
    </HotTable>
  );
};

// compoundsdata 版型
const App45 = () => {
  return (
    <HotTable
      data={data45}
      height="auto"
      width={twidth}
      colWidths={[231.7, 231.7, 175.28, 175.28, 175.28, 175.28, 175.28]}
      colHeaders={false}
      rowHeaders={false}
      rowHeights={trowHeights}
      hiddenColumns={true}
      dropdownMenu={true}
      // hiddenColumns={{
      //   indicators: true
      // }}
      contextMenu={true}
      multiColumnSorting={true}
      filters={true}
      // afterGetColHeader={alignHeaders}
      // beforeRenderer={addClassesToRows}
      // afterGetRowHeader={drawCheckboxInRowHeaders}
      // afterOnCellMouseDown={changeCheckboxCell}
      // manualRowMove={true}
      stretchH="all"
      className="custom-table"
      licenseKey="non-commercial-and-evaluation"
      mergeCells={[
        { row: 0, col: 0, rowspan: 1, colspan: 7 },
        { row: 2, col: 0, rowspan: 40, colspan: 1 },
      ]}
      cell={[
        { row: 0, col: 0, readOnly: true },
        { row: 1, col: 0, readOnly: true },
        { row: 1, col: 1, readOnly: true },
        { row: 1, col: 2, readOnly: true },
        { row: 1, col: 3, readOnly: true },
        { row: 1, col: 4, readOnly: true },
        { row: 1, col: 5, readOnly: true },
        { row: 1, col: 6, readOnly: true },
      ]}
    >
      <HotColumn data={0} className="htCenter htMiddle" readOnly={true} />
      <HotColumn data={1} className="htCenter htMiddle" />
      <HotColumn data={2} className="htCenter htMiddle" />
      <HotColumn data={3} className="htCenter htMiddle" />
      <HotColumn data={4} className="htCenter htMiddle" />
      <HotColumn data={5} className="htCenter htMiddle" />
      <HotColumn data={6} className="htCenter htMiddle" />
      <HotColumn data={7} className="htCenter htMiddle" />
    </HotTable>
  );
};

// compoundsdata 版型
const App46 = () => {
  return (
    <HotTable
      data={data46}
      height="auto"
      width="463.4"
      colWidths={[231.7, 231.7]}
      colHeaders={false}
      rowHeaders={false}
      rowHeights={trowHeights}
      hiddenColumns={true}
      dropdownMenu={true}
      // hiddenColumns={{
      //   indicators: true
      // }}
      contextMenu={true}
      multiColumnSorting={true}
      filters={true}
      // afterGetColHeader={alignHeaders}
      // beforeRenderer={addClassesToRows}
      // afterGetRowHeader={drawCheckboxInRowHeaders}
      // afterOnCellMouseDown={changeCheckboxCell}
      // manualRowMove={true}
      stretchH="all"
      className="custom-table"
      licenseKey="non-commercial-and-evaluation"
      mergeCells={[
        { row: 0, col: 0, rowspan: 1, colspan: 2 },
        { row: 43, col: 0, rowspan: 1, colspan: 2 },
      ]}
      cell={[
        { row: 0, col: 0, readOnly: true },
        { row: 1, col: 0, readOnly: true },
        { row: 1, col: 1, readOnly: true },
        { row: 43, col: 0, readOnly: true },
        { row: 44, col: 0, readOnly: true },
        { row: 44, col: 1, readOnly: true },
      ]}
    >
      <HotColumn data={0} className="htCenter htMiddle" />
      <HotColumn data={1} className="htCenter htMiddle" />
      {/* <HotColumn data={2} className="htCenter htMiddle" />
      <HotColumn data={3} className="htCenter htMiddle" />
      <HotColumn data={4} className="htCenter htMiddle" />
      <HotColumn data={5} className="htCenter htMiddle" />
      <HotColumn data={6} className="htCenter htMiddle" />
      <HotColumn data={7} className="htCenter htMiddle" /> */}
    </HotTable>
  );
};

// header 版型，MiTAP FQC 總表
const App51 = () => {
  return (
    <HotTable
      data={data51}
      height="auto"
      width={twidth}
      colWidths={[258.3, 148.3, 183.3, 148.3, 183.3, 148.3, 103.3, 166.7]}
      colHeaders={false}
      rowHeaders={false}
      rowHeights={trowHeights}
      hiddenColumns={true}
      dropdownMenu={true}
      // hiddenColumns={{
      //   indicators: true
      // }}
      contextMenu={true}
      multiColumnSorting={true}
      filters={true}
      // afterGetColHeader={alignHeaders}
      // beforeRenderer={addClassesToRows}
      // afterGetRowHeader={drawCheckboxInRowHeaders}
      // afterOnCellMouseDown={changeCheckboxCell}
      // manualRowMove={true}
      stretchH="all"
      className="custom-table"
      licenseKey="non-commercial-and-evaluation"
      mergeCells={[{ row: 0, col: 0, rowspan: 1, colspan: 6 }]}
      cell={[
        { row: 0, col: 0, readOnly: true },
        { row: 0, col: 4, readOnly: true },
        { row: 0, col: 6, readOnly: true },
        { row: 1, col: 0, readOnly: true },
        { row: 1, col: 2, readOnly: true },
        { row: 1, col: 4, readOnly: true },
        { row: 1, col: 6, readOnly: true },
        { row: 2, col: 0, readOnly: true },
        { row: 2, col: 2, readOnly: true },
        { row: 2, col: 4, readOnly: true },
        { row: 2, col: 6, readOnly: true },
      ]}
    >
      <HotColumn data={0} className="htCenter htMiddle" />
      <HotColumn data={1} className="htCenter htMiddle" />
      <HotColumn data={2} className="htCenter htMiddle" />
      <HotColumn data={3} className="htCenter htMiddle" />
      <HotColumn data={4} className="htCenter htMiddle" />
      <HotColumn data={5} className="htCenter htMiddle" />
      <HotColumn data={6} className="htCenter htMiddle" />
      <HotColumn data={7} className="htCenter htMiddle" />
    </HotTable>
  );
};

// compoundsdata 版型
const App52 = () => {
  return (
    <HotTable
      data={data52}
      height="auto"
      width={twidth}
      colWidths={[231.7, 231.7, 219.1, 219.1, 219.1, 219.1]}
      colHeaders={false}
      rowHeaders={false}
      rowHeights={trowHeights}
      hiddenColumns={true}
      dropdownMenu={true}
      // hiddenColumns={{
      //   indicators: true
      // }}
      contextMenu={true}
      multiColumnSorting={true}
      filters={true}
      // afterGetColHeader={alignHeaders}
      // beforeRenderer={addClassesToRows}
      // afterGetRowHeader={drawCheckboxInRowHeaders}
      // afterOnCellMouseDown={changeCheckboxCell}
      // manualRowMove={true}
      stretchH="all"
      className="custom-table"
      licenseKey="non-commercial-and-evaluation"
      mergeCells={[{ row: 0, col: 0, rowspan: 1, colspan: 7 }]}
      cell={[
        { row: 0, col: 0, readOnly: true },
        { row: 1, col: 0, readOnly: true },
        { row: 1, col: 1, readOnly: true },
        { row: 1, col: 2, readOnly: true },
        { row: 1, col: 3, readOnly: true },
        { row: 1, col: 4, readOnly: true },
        { row: 1, col: 5, readOnly: true },
        { row: 1, col: 6, readOnly: true },
      ]}
    >
      <HotColumn data={0} className="htCenter htMiddle" readOnly={true} />
      <HotColumn data={1} className="htCenter htMiddle" />
      <HotColumn data={2} className="htCenter htMiddle" />
      <HotColumn data={3} className="htCenter htMiddle" />
      <HotColumn data={4} className="htCenter htMiddle" />
      <HotColumn data={5} className="htCenter htMiddle" />
    </HotTable>
  );
};

// 總結 版型
const App53 = () => {
  return (
    <HotTable
      data={data53}
      height="auto"
      width={twidth}
      colWidths={[682.5, 219.1, 438.2]}
      colHeaders={false}
      rowHeaders={false}
      rowHeights={trowHeights}
      hiddenColumns={true}
      dropdownMenu={true}
      // hiddenColumns={{
      //   indicators: true
      // }}
      contextMenu={true}
      multiColumnSorting={true}
      filters={true}
      // afterGetColHeader={alignHeaders}
      // beforeRenderer={addClassesToRows}
      // afterGetRowHeader={drawCheckboxInRowHeaders}
      // afterOnCellMouseDown={changeCheckboxCell}
      // manualRowMove={true}
      stretchH="all"
      className="custom-table"
      licenseKey="non-commercial-and-evaluation"
      mergeCells={[{ row: 0, col: 0, rowspan: 1, colspan: 3 }]}
      cell={[
        {
          row: 0,
          col: 0,
          className: "htCenter htMiddle",
          readOnly: true,
        },
        {
          row: 1,
          col: 0,
          className: "htCenter htMiddle",
          readOnly: true,
        },
      ]}
    >
      <HotColumn data={0} className="htCenter htMiddle" />
      <HotColumn data={1} className="htCenter htMiddle" />
      <HotColumn data={2} className="htCenter htMiddle" />
    </HotTable>
  );
};

// 備註與簽名
const App54 = () => {
  return (
    <HotTable
      data={data54}
      height="auto"
      width={twidth}
      colWidths={[231.7, 231.7, 219.1, 219.1, 219.1, 219.1]}
      colHeaders={false}
      rowHeaders={false}
      rowHeights={trowHeights}
      hiddenColumns={true}
      dropdownMenu={true}
      // hiddenColumns={{
      //   indicators: true
      // }}
      contextMenu={true}
      multiColumnSorting={true}
      filters={true}
      // afterGetColHeader={alignHeaders}
      // beforeRenderer={addClassesToRows}
      // afterGetRowHeader={drawCheckboxInRowHeaders}
      // afterOnCellMouseDown={changeCheckboxCell}
      // manualRowMove={true}
      stretchH="all"
      className="custom-table"
      licenseKey="non-commercial-and-evaluation"
      cell={[
        {
          row: 0,
          col: 0,
          className: "htMiddle",
          readOnly: true,
        },
      ]}
    >
      <HotColumn data={0} className="htMiddle" />
      <HotColumn data={1} className="htCenter htMiddle" />
      <HotColumn data={2} className="htCenter htMiddle" />
      <HotColumn data={3} className="htCenter htMiddle" />
      <HotColumn data={4} className="htCenter htMiddle" />
      <HotColumn data={5} className="htCenter htMiddle" />
      <HotColumn data={6} className="htCenter htMiddle" />
      <HotColumn data={7} className="htCenter htMiddle" />
    </HotTable>
  );
};

// compoundsdata 版型
const App55 = () => {
  return (
    <HotTable
      data={data55}
      height="auto"
      width={twidth}
      colWidths={[231.7, 231.7, 146.06, 146.06, 146.06, 146.06, 146.06, 146.06]} // 8764 / 6
      colHeaders={false}
      rowHeaders={false}
      rowHeights={trowHeights}
      hiddenColumns={true}
      dropdownMenu={true}
      // hiddenColumns={{
      //   indicators: true
      // }}
      contextMenu={true}
      multiColumnSorting={true}
      filters={true}
      // afterGetColHeader={alignHeaders}
      // beforeRenderer={addClassesToRows}
      // afterGetRowHeader={drawCheckboxInRowHeaders}
      // afterOnCellMouseDown={changeCheckboxCell}
      // manualRowMove={true}
      stretchH="all"
      className="custom-table"
      licenseKey="non-commercial-and-evaluation"
      mergeCells={[{ row: 0, col: 0, rowspan: 1, colspan: 7 }]}
      cell={[
        { row: 0, col: 0, readOnly: true },
        { row: 1, col: 0, readOnly: true },
        { row: 1, col: 1, readOnly: true },
        { row: 1, col: 2, readOnly: true },
        { row: 1, col: 3, readOnly: true },
        { row: 1, col: 4, readOnly: true },
        { row: 1, col: 5, readOnly: true },
        { row: 1, col: 6, readOnly: true },
      ]}
    >
      <HotColumn data={0} className="htCenter htMiddle" readOnly={true} />
      <HotColumn data={1} className="htCenter htMiddle" />
      <HotColumn data={2} className="htCenter htMiddle" />
      <HotColumn data={3} className="htCenter htMiddle" />
      <HotColumn data={4} className="htCenter htMiddle" />
      <HotColumn data={5} className="htCenter htMiddle" />
      <HotColumn data={6} className="htCenter htMiddle" />
      <HotColumn data={7} className="htCenter htMiddle" />
    </HotTable>
  );
};

// header 版型，MiTAP FQC 總表
const App61 = () => {
  return (
    <HotTable
      data={data61}
      height="auto"
      width={twidth}
      colWidths={[
        231.7, 231.7, 109.55, 109.55, 109.55, 109.55, 109.55, 109.55, 109.55,
        109.55,
      ]}
      colHeaders={false}
      rowHeaders={false}
      rowHeights={trowHeights}
      hiddenColumns={true}
      dropdownMenu={true}
      // hiddenColumns={{
      //   indicators: true
      // }}
      contextMenu={true}
      multiColumnSorting={true}
      filters={true}
      // afterGetColHeader={alignHeaders}
      // beforeRenderer={addClassesToRows}
      // afterGetRowHeader={drawCheckboxInRowHeaders}
      // afterOnCellMouseDown={changeCheckboxCell}
      // manualRowMove={true}
      stretchH="all"
      className="custom-table"
      licenseKey="non-commercial-and-evaluation"
      mergeCells={[{ row: 0, col: 0, rowspan: 1, colspan: 6 }]}
      cell={[
        { row: 0, col: 0, readOnly: true },
        { row: 0, col: 4, readOnly: true },
        { row: 0, col: 6, readOnly: true },
        { row: 0, col: 8, readOnly: true },
        { row: 1, col: 0, readOnly: true },
        { row: 1, col: 2, readOnly: true },
        { row: 1, col: 4, readOnly: true },
        { row: 1, col: 6, readOnly: true },
        { row: 2, col: 0, readOnly: true },
        { row: 2, col: 2, readOnly: true },
        { row: 2, col: 4, readOnly: true },
        { row: 2, col: 6, readOnly: true },
      ]}
    >
      <HotColumn data={0} className="htCenter htMiddle" />
      <HotColumn data={1} className="htCenter htMiddle" />
      <HotColumn data={2} className="htCenter htMiddle" />
      <HotColumn data={3} className="htCenter htMiddle" />
      <HotColumn data={4} className="htCenter htMiddle" />
      <HotColumn data={5} className="htCenter htMiddle" />
      <HotColumn data={6} className="htCenter htMiddle" />
      <HotColumn data={7} className="htCenter htMiddle" />
      <HotColumn data={8} className="htCenter htMiddle" />
      <HotColumn data={9} className="htCenter htMiddle" />
    </HotTable>
  );
};

// compoundsdata 版型
const App62 = () => {
  return (
    <HotTable
      data={data62}
      height="auto"
      width={twidth}
      colWidths={[
        231.7, 231.7, 109.55, 109.55, 109.55, 109.55, 109.55, 109.55, 109.55,
        109.55,
      ]} // 8764 / 6
      colHeaders={false}
      rowHeaders={false}
      rowHeights={trowHeights}
      hiddenColumns={true}
      dropdownMenu={true}
      // hiddenColumns={{
      //   indicators: true
      // }}
      contextMenu={true}
      multiColumnSorting={true}
      filters={true}
      // afterGetColHeader={alignHeaders}
      // beforeRenderer={addClassesToRows}
      // afterGetRowHeader={drawCheckboxInRowHeaders}
      // afterOnCellMouseDown={changeCheckboxCell}
      // manualRowMove={true}
      stretchH="all"
      className="custom-table"
      licenseKey="non-commercial-and-evaluation"
      mergeCells={[{ row: 0, col: 0, rowspan: 1, colspan: 10 }]}
      cell={[
        { row: 0, col: 0, readOnly: true },
        { row: 1, col: 0, readOnly: true },
        { row: 1, col: 1, readOnly: true },
        { row: 1, col: 2, readOnly: true },
        { row: 1, col: 3, readOnly: true },
        { row: 1, col: 4, readOnly: true },
        { row: 1, col: 5, readOnly: true },
        { row: 1, col: 6, readOnly: true },
      ]}
    >
      <HotColumn data={0} className="htCenter htMiddle" readOnly={true} />
      <HotColumn data={1} className="htCenter htMiddle" />
      <HotColumn data={2} className="htCenter htMiddle" />
      <HotColumn data={3} className="htCenter htMiddle" />
      <HotColumn data={4} className="htCenter htMiddle" />
      <HotColumn data={5} className="htCenter htMiddle" />
      <HotColumn data={6} className="htCenter htMiddle" />
      <HotColumn data={7} className="htCenter htMiddle" />
      <HotColumn data={8} className="htCenter htMiddle" />
      <HotColumn data={9} className="htCenter htMiddle" />
    </HotTable>
  );
};

// 總結 版型
const App63 = () => {
  return (
    <HotTable
      data={data63}
      height="auto"
      width={twidth}
      colWidths={[682.5, 219.1, 438.2]}
      colHeaders={false}
      rowHeaders={false}
      rowHeights={trowHeights}
      hiddenColumns={true}
      dropdownMenu={true}
      // hiddenColumns={{
      //   indicators: true
      // }}
      contextMenu={true}
      multiColumnSorting={true}
      filters={true}
      // afterGetColHeader={alignHeaders}
      // beforeRenderer={addClassesToRows}
      // afterGetRowHeader={drawCheckboxInRowHeaders}
      // afterOnCellMouseDown={changeCheckboxCell}
      // manualRowMove={true}
      stretchH="all"
      className="custom-table"
      licenseKey="non-commercial-and-evaluation"
      mergeCells={[{ row: 0, col: 0, rowspan: 1, colspan: 3 }]}
      cell={[
        {
          row: 0,
          col: 0,
          className: "htCenter htMiddle",
          readOnly: true,
        },
        {
          row: 1,
          col: 0,
          className: "htCenter htMiddle",
          readOnly: true,
        },
      ]}
    >
      <HotColumn data={0} className="htCenter htMiddle" />
      <HotColumn data={1} className="htCenter htMiddle" />
      <HotColumn data={2} className="htCenter htMiddle" />
    </HotTable>
  );
};

// 備註與簽名
const App64 = () => {
  return (
    <HotTable
      data={data64}
      height="auto"
      width={twidth}
      colWidths={[231.7, 231.7, 219.1, 219.1, 219.1, 219.1]}
      colHeaders={false}
      rowHeaders={false}
      rowHeights={trowHeights}
      hiddenColumns={true}
      dropdownMenu={true}
      // hiddenColumns={{
      //   indicators: true
      // }}
      contextMenu={true}
      multiColumnSorting={true}
      filters={true}
      // afterGetColHeader={alignHeaders}
      // beforeRenderer={addClassesToRows}
      // afterGetRowHeader={drawCheckboxInRowHeaders}
      // afterOnCellMouseDown={changeCheckboxCell}
      // manualRowMove={true}
      stretchH="all"
      className="custom-table"
      licenseKey="non-commercial-and-evaluation"
      cell={[
        {
          row: 0,
          col: 0,
          className: "htMiddle",
          readOnly: true,
        },
      ]}
    >
      <HotColumn data={0} className="htMiddle" />
      <HotColumn data={1} className="htCenter htMiddle" />
      <HotColumn data={2} className="htCenter htMiddle" />
      <HotColumn data={3} className="htCenter htMiddle" />
      <HotColumn data={4} className="htCenter htMiddle" />
      <HotColumn data={5} className="htCenter htMiddle" />
      <HotColumn data={6} className="htCenter htMiddle" />
      <HotColumn data={7} className="htCenter htMiddle" />
    </HotTable>
  );
};

// --------

// const container1 = document.getElementById("container1");
// const root1 = createRoot(container1);

// root1.render(<App1 />);

// // --------

// const container21 = document.getElementById("container21");
// const root21 = createRoot(container21);

// root21.render(<App21 />);

// const container22 = document.getElementById("container22");
// const root22 = createRoot(container22);

// root22.render(<App22 />);

// const container23 = document.getElementById("container23");
// const root23 = createRoot(container23);

// root23.render(<App23 />);

// const container24 = document.getElementById("container24");
// const root24 = createRoot(container24);

// root24.render(<App24 />);

// // --------

// const container31 = document.getElementById("container31");
// const root31 = createRoot(container31);

// root31.render(<App31 />);

// const container32 = document.getElementById("container32");
// const root32 = createRoot(container32);

// root32.render(<App32 />);

// const container33 = document.getElementById("container33");
// const root33 = createRoot(container33);

// root33.render(<App33 />);

// const container34 = document.getElementById("container34");
// const root34 = createRoot(container34);

// root34.render(<App34 />);

// const container35 = document.getElementById("container35");
// const root35 = createRoot(container35);

// root35.render(<App35 />);

// --------

// const container41 = document.getElementById("container41");
// const root41 = createRoot(container41);

// root41.render(<App41 />);

// const container42 = document.getElementById("container42");
// const root42 = createRoot(container42);

// root42.render(<App42 />);

// const container43 = document.getElementById("container43");
// const root43 = createRoot(container43);

// root43.render(<App43 />);

// const container44 = document.getElementById("container44");
// const root44 = createRoot(container44);

// root44.render(<App44 />);

// const container45 = document.getElementById("container45");
// const root45 = createRoot(container45);

// root45.render(<App45 />);

// const container46 = document.getElementById("container46");
// const root46 = createRoot(container46);

// root46.render(<App46 />);

// --------

// const container51 = document.getElementById("container51");
// const root51 = createRoot(container51);

// root51.render(<App51 />);

// const container52 = document.getElementById("container52");
// const root52 = createRoot(container52);

// root52.render(<App52 />);

// const container53 = document.getElementById("container53");
// const root53 = createRoot(container53);

// root53.render(<App53 />);

// const container54 = document.getElementById("container54");
// const root54 = createRoot(container54);

// root54.render(<App54 />);

// const container55 = document.getElementById("container55");
// const root55 = createRoot(container55);

// root55.render(<App55 />);

// --------

const container61 = document.getElementById("container61");
const root61 = createRoot(container61);

root61.render(<App61 />);

const container62 = document.getElementById("container62");
const root62 = createRoot(container62);

root62.render(<App62 />);

const container63 = document.getElementById("container63");
const root63 = createRoot(container63);

root63.render(<App63 />);

const container64 = document.getElementById("container64");
const root64 = createRoot(container64);

root64.render(<App64 />);

// --------
