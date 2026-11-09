import { NextResponse } from 'next/server';

interface PincodeData {
  city: string;
  state: string;
  isServiceable: boolean;
  isCodAllowed: boolean;
  minEstimatedDays: number;
  maxEstimatedDays: number;
}

const PINCODE_MAP: Record<string, PincodeData> = {
  '560001': { city: 'Bengaluru (MG Road/Central)', state: 'Karnataka', isServiceable: true, isCodAllowed: true, minEstimatedDays: 1, maxEstimatedDays: 2 },
  '560034': { city: 'Bengaluru (Koramangala)', state: 'Karnataka', isServiceable: true, isCodAllowed: true, minEstimatedDays: 1, maxEstimatedDays: 2 },
  '560068': { city: 'Bengaluru (Bommanahalli/Hosur Rd)', state: 'Karnataka', isServiceable: true, isCodAllowed: true, minEstimatedDays: 1, maxEstimatedDays: 2 },
  '560100': { city: 'Bengaluru (Electronic City)', state: 'Karnataka', isServiceable: true, isCodAllowed: true, minEstimatedDays: 1, maxEstimatedDays: 2 },
  '560037': { city: 'Bengaluru (Marathahalli)', state: 'Karnataka', isServiceable: true, isCodAllowed: true, minEstimatedDays: 1, maxEstimatedDays: 2 },
  '560066': { city: 'Bengaluru (Whitefield)', state: 'Karnataka', isServiceable: true, isCodAllowed: true, minEstimatedDays: 1, maxEstimatedDays: 2 },
  '560076': { city: 'Bengaluru (Bannerghatta Rd)', state: 'Karnataka', isServiceable: true, isCodAllowed: true, minEstimatedDays: 1, maxEstimatedDays: 2 },
  '110001': { city: 'New Delhi (Connaught Place)', state: 'Delhi', isServiceable: true, isCodAllowed: true, minEstimatedDays: 2, maxEstimatedDays: 4 },
  '400001': { city: 'Mumbai (Fort)', state: 'Maharashtra', isServiceable: true, isCodAllowed: true, minEstimatedDays: 2, maxEstimatedDays: 4 },
  '600001': { city: 'Chennai (George Town)', state: 'Tamil Nadu', isServiceable: true, isCodAllowed: true, minEstimatedDays: 2, maxEstimatedDays: 3 },
  '500001': { city: 'Hyderabad (Abids)', state: 'Telangana', isServiceable: true, isCodAllowed: true, minEstimatedDays: 2, maxEstimatedDays: 3 },
};

export async function GET(
  request: Request,
  { params }: { params: { pincode: string } }
) {
  const { pincode } = params;

  if (!pincode || pincode.length !== 6 || !/^\d{6}$/.test(pincode)) {
    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'INVALID_PINCODE',
          message: 'Pincode must be exactly 6 numeric digits.',
        },
      },
      { status: 400 }
    );
  }

  // Check known map or fallback to general Indian zonal rules
  let data = PINCODE_MAP[pincode];

  if (!data) {
    if (pincode.startsWith('560')) {
      data = {
        city: 'Bengaluru Outer Hub',
        state: 'Karnataka',
        isServiceable: true,
        isCodAllowed: true,
        minEstimatedDays: 1,
        maxEstimatedDays: 2,
      };
    } else {
      data = {
        city: 'Pan-India Delivery Zone',
        state: 'India',
        isServiceable: true,
        isCodAllowed: true,
        minEstimatedDays: 3,
        maxEstimatedDays: 5,
      };
    }
  }

  return NextResponse.json({
    success: true,
    data: {
      pincode,
      ...data,
      courierPartner: 'Shiprocket Express',
    },
  });
}

