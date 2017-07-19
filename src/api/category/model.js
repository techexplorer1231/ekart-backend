import mongoose, { Schema } from 'mongoose';

const categorySchema = new Schema(
  {
    type: {
      type: String,
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    slug: {
      type: String,
    },
    status: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

categorySchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      type: this.type,
      name: this.name,
      description: this.description,
      slug: this.slug,
      status: this.status,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };

    return full
      ? {
        ...view,
          // add properties for a full view
      }
      : view;
  },
};

const model = mongoose.model('Category', categorySchema);

export const schema = model.schema;
export default model;
