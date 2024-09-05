import './assets/output.css';
import TableWidget from './components/table-widget/table-widget';
import ScanCompletionChartWidget from './views/scan-completion-chart-widget';

function App() {
  return (
    <div className='p-2'>
      <ScanCompletionChartWidget />
      <br />
      <TableWidget />
    </div>
  );
}

export default App;
