import { NextResponse } from 'next/server';

const API_BASE_URL = 'https://api.familysearch.org';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const personId = searchParams.get('personId');

  if (!personId) {
    return NextResponse.json({ error: 'Person ID is required' }, { status: 400 });
  }

  try {
    const response = await fetch(
      `${API_BASE_URL}/tree/persons/${personId}?flag=fst`,
      {
        headers: {
          'Accept': 'application/x-gedcomx-v1+json',
          'Authorization': `Bearer ${process.env.FAMILYSEARCH_API_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching family data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch family data' },
      { status: 500 }
    );
  }
}