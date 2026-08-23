from fastapi import APIRouter, UploadFile, File, HTTPException

from app.services.cloudinary_service import upload_image


router = APIRouter(
    prefix="/api/v1/upload",
    tags=["Upload"]
)


@router.post("/image")
async def upload_image_endpoint(
    file: UploadFile = File(...)
):
    if not file.content_type:
        raise HTTPException(
            status_code=400,
            detail="Invalid file type."
        )

    allowed_types = [
        "image/jpeg",
        "image/png",
        "image/webp",
    ]

    if file.content_type not in allowed_types:
        raise HTTPException(
            status_code=400,
            detail="Only JPG, PNG, and WEBP images are allowed."
        )

    contents = await file.read()

    if len(contents) > 5 * 1024 * 1024:
        raise HTTPException(
            status_code=400,
            detail="Image must be smaller than 5 MB."
        )

    result = upload_image(contents)

    return result