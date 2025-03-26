import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { QRCodeCanvas } from 'qrcode.react'; // Cambiamos a QRCodeCanvas
import { Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Datos de ejemplo para la tabla
const qrData = [
  { id: 1, location: 'Store A', scanned: 120, clicked: 85, url: 'https://example.com/store-a' },
  { id: 2, location: 'Store B', scanned: 95, clicked: 60, url: 'https://example.com/store-b' },
  { id: 3, location: 'Store C', scanned: 150, clicked: 110, url: 'https://example.com/store-c' },
];

const QRCodePage = () => {
  const { t } = useTranslation(); // Hook para traducciones
  const [activeTab, setActiveTab] = useState<'review' | 'customer-experience'>('review');

  // Función para descargar el QR como imagen
  const downloadQR = (_url: string, location: string) => {
    const canvas = document.getElementById(`qr-${location}`) as HTMLCanvasElement;
    const pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    const downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = `qr-code-${location}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="min-h-screen bg-[var(--color-primary-50)] p-8">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <h1 className="text-2xl font-bold text-black mb-8">{t('qrCodePageTitle')}</h1>

        {/* Botones Review y Customer-Experience */}
        <div className="flex gap-4 mb-6">
          <Button
            variant={activeTab === 'review' ? 'default' : 'outline'}
            onClick={() => setActiveTab('review')}
          >
            {t('review')}
          </Button>
          <Button
            variant={activeTab === 'customer-experience' ? 'default' : 'outline'}
            onClick={() => setActiveTab('customer-experience')}
          >
            {t('customerExperience')}
          </Button>
        </div>

        {/* Contenido dinámico según la pestaña activa */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          {activeTab === 'review' && (
            <>
              <h2 className="text-xl font-medium text-gray-600 mb-4">{t('reviewQRCodes')}</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{t('location')}</TableHead>
                    <TableHead>{t('scanned')}</TableHead>
                    <TableHead>{t('clicked')}</TableHead>
                    <TableHead>{t('download')}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {qrData.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="flex items-center gap-2">
                        <QRCodeCanvas
                          id={`qr-${item.location}`}
                          value={item.url}
                          size={50}
                          level="H"
                          includeMargin={true}
                        />
                        {item.location}
                      </TableCell>
                      <TableCell>{item.scanned}</TableCell>
                      <TableCell>{item.clicked}</TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => downloadQR(item.url, item.location)}
                        >
                          <Download className="w-5 h-5" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </>
          )}

          {activeTab === 'customer-experience' && (
            <>
              <h2 className="text-xl font-medium text-gray-600 mb-4">{t('customerExperienceQRCodes')}</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{t('location')}</TableHead>
                    <TableHead>{t('scanned')}</TableHead>
                    <TableHead>{t('clicked')}</TableHead>
                    <TableHead>{t('download')}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {qrData.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="flex items-center gap-2">
                        <QRCodeCanvas
                          id={`qr-${item.location}`}
                          value={item.url}
                          size={50}
                          level="H"
                          includeMargin={true}
                        />
                        {item.location}
                      </TableCell>
                      <TableCell>{item.scanned}</TableCell>
                      <TableCell>{item.clicked}</TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => downloadQR(item.url, item.location)}
                        >
                          <Download className="w-5 h-5" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QRCodePage;