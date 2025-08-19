import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '/src/components/ui/table';
import { Badge } from '/src/components/ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '/src/components/ui/card';
import { FileText } from 'lucide-react';

const Submissions = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    // For demonstration, we use localStorage.
    // In a real app, you would fetch this from a server.
    const getSubmissions = () => {
      let localSubmissions = localStorage.getItem('formSubmissions');
      if (!localSubmissions) {
        // Create mock data if none exists
        const mockData = [
          {
            id: 'SUB-2025-001',
            formName: 'Fire Safety Inspection Request',
            submittedAt: new Date(2025, 7, 10).toISOString(),
            status: 'Approved',
          },
          {
            id: 'SUB-2025-002',
            formName: 'Burn Permit Application',
            submittedAt: new Date(2025, 7, 11).toISOString(),
            status: 'Pending',
          },
          {
            id: 'SUB-2025-003',
            formName: 'Special Event Permit',
            submittedAt: new Date(2025, 7, 5).toISOString(),
            status: 'Rejected',
          },
          {
            id: 'SUB-2025-004',
            formName: 'Building Permit Application',
            submittedAt: new Date(2025, 7, 12).toISOString(),
            status: 'Pending',
          },
        ];
        localStorage.setItem('formSubmissions', JSON.stringify(mockData));
        localSubmissions = JSON.stringify(mockData);
      }
      setSubmissions(JSON.parse(localSubmissions));
    };

    getSubmissions();
  }, []);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Approved':
        return (
          <Badge
            variant="outline"
            className="bg-green-100 text-green-800 border-green-200"
          >
            Approved
          </Badge>
        );
      case 'Pending':
        return (
          <Badge
            variant="outline"
            className="bg-yellow-100 text-yellow-800 border-yellow-200"
          >
            Pending
          </Badge>
        );
      case 'Rejected':
        return (
          <Badge
            variant="outline"
            className="bg-red-100 text-red-800 border-red-200"
          >
            Rejected
          </Badge>
        );
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="container mx-auto px-4 py-12"
    >
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground">My Submissions</h1>
        <p className="text-lg text-muted-foreground">
          Track the status of your submitted forms.
        </p>
      </div>

      <Card className="formal-card">
        <CardHeader>
          <CardTitle>Submission History</CardTitle>
        </CardHeader>
        <CardContent>
          {submissions.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Submission ID</TableHead>
                  <TableHead>Form Name</TableHead>
                  <TableHead>Date Submitted</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {submissions.map((submission) => (
                  <TableRow key={submission.id}>
                    <TableCell className="font-medium">
                      {submission.id}
                    </TableCell>
                    <TableCell>{submission.formName}</TableCell>
                    <TableCell>
                      {new Date(submission.submittedAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-right">
                      {getStatusBadge(submission.status)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-16">
              <FileText className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                No Submissions Yet
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                When you submit a form, its status will appear here.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Submissions;
